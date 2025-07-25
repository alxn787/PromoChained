/* eslint-disable */
'use client'
import { useForm, useFieldArray } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { InfoIcon, Upload, Plus, Trash2 } from 'lucide-react';
import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { send } from 'node:process';

interface QuestionOption {
  text: string;
}

interface Question {
  text: string;
  options: QuestionOption[];
  correctAnswer: number;
}

interface SponsorFormData {
  username: string;
  gameTitle: string;
  campaignDescription: string;
  donation: number;
  gameStartTime: string;
  gameEndTime: string;
  uploadImage: FileList;
  isPublic: string;
  questions: Question[];
}

const SponsorPromo = () => {
  const form = useForm<SponsorFormData>({
    defaultValues: {
      username: '',
      gameTitle: '',
      campaignDescription: '',
      donation: 0,
      gameStartTime: '',
      gameEndTime: '',
      isPublic: 'true',
      questions: [{
        text: '',
        options: [
          { text: '' },
          { text: '' },
          { text: '' },
          { text: '' }
        ],
        correctAnswer: 0
      }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'questions',
  });

  const onSubmit = (data: SponsorFormData) => {
    console.log('Form submitted:', data);
    sendsol(data.donation);
  };

  const addQuestion = () => {
    append({
      text: '',
      options: [
        { text: '' },
        { text: '' },
        { text: '' },
        { text: '' }
      ],
      correctAnswer: 0
    });
  };

  const removeQuestion = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  const { wallet, connected } = useWallet();


  //TODO connect  it to the contract intead of this transaction
  
  async function sendsol(amount: number) { 
    if(!wallet?.adapter.publicKey) {
      console.error("Wallet not connected or public key not available.");
      return;
    }
    
    try {
        const connection = new Connection("https://api.devnet.solana.com");
        const lamports = amount * LAMPORTS_PER_SOL; // Convert SOL to lamports
        if (lamports <= 0) {
          console.warn("Donation amount is zero or negative. No transaction will be sent.");
          return;
        }

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: wallet.adapter.publicKey, 
                toPubkey: new PublicKey('FP4mUAwWEGbp7A45LULzxcWF2usBw7SeUj2L4M1SYiub'),
                lamports: lamports, 
            })
        );
        const signature = await wallet.adapter.sendTransaction(transaction, connection);
        console.log('Transaction sent with signature:', signature);
    } catch (error) {
        console.error("Error sending SOL:", error);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-4">Create a Sponsored Quiz Campaign</h1>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Basic Info Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black font-semibold">Your username*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your username"
                          className="border-gray-300 focus:border-coral-red focus:ring-coral-red"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gameTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black font-semibold">Campaign Title*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Campaign Title"
                          className="border-gray-300 focus:border-coral-red focus:ring-coral-red"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Campaign Description */}
              <FormField
                control={form.control}
                name="campaignDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black font-semibold">Campaign Description*</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your campaign..."
                        className="min-h-[100px] border-gray-300 focus:border-coral-red focus:ring-coral-red"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Financial Info Row */}
              <div className="grid md:grid-cols-1 gap-6">
                <FormField
                  control={form.control}
                  name="donation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-black font-semibold">
                        Donation to prize pool by you (in SOL)*
                        <InfoIcon className="w-4 h-4 text-gray-400" />
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="0"
                          className="border-gray-300 focus:border-coral-red focus:ring-coral-red"
                          {...field}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                          step="0.000000001" // Allow fractional SOL input
                          min="0" // Ensure positive donation
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Game Start Time, End Time, Upload and Privacy Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="gameStartTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-black font-semibold">
                        Campaign start time*
                        <InfoIcon className="w-4 h-4 text-gray-400" />
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="datetime-local"
                          className="border-gray-300 focus:border-coral-red focus:ring-coral-red"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gameEndTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-black font-semibold">
                        Campaign end time*
                        <InfoIcon className="w-4 h-4 text-gray-400" />
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="datetime-local"
                          className="border-gray-300 focus:border-coral-red focus:ring-coral-red"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="uploadImage"
                  render={({ field: { value, onChange, ref, ...rest } }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-black font-semibold">
                        Upload brand image
                        <InfoIcon className="w-4 h-4 text-gray-400" />
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="file"
                            accept="image/*"
                            className="border-gray-300 focus:border-coral-red focus:ring-coral-red"
                            ref={ref}
                            onChange={(e) => {
                              onChange(e.target.files); 
                            }}

                            {...rest}
                          />
                          <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isPublic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-black font-semibold">
                        Campaign Visibility*
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-gray-300 focus:border-coral-red focus:ring-coral-red">
                            <SelectValue placeholder="Select visibility" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="true">Public</SelectItem>
                          <SelectItem value="false">Private</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-black">Questions</h3>
                  <Button
                    type="button"
                    onClick={addQuestion}
                    className="bg-[#ff5840] hover:bg-[#ff5840]/90 text-white"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Question
                  </Button>
                </div>

                {fields.map((field, questionIndex) => (
                  <div key={field.id} className="border border-gray-200 rounded-lg p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-black">Question {questionIndex + 1}</h4>
                      {fields.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeQuestion(questionIndex)}
                          className="text-red-600 border-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <FormField
                      control={form.control}
                      name={`questions.${questionIndex}.text`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black font-semibold">Enter question</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Enter your question here..."
                              className="min-h-[120px] border-gray-300 focus:border-coral-red focus:ring-coral-red"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-4">
                      <FormLabel className="text-black font-semibold">Add answers and select the correct one</FormLabel>

                      <FormField
                        control={form.control}
                        name={`questions.${questionIndex}.correctAnswer`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <RadioGroup
                                onValueChange={(value) => field.onChange(Number(value))}
                                value={field.value?.toString()}
                                className="grid grid-cols-2 gap-4"
                              >
                                {[0, 1, 2, 3].map((optionIndex) => (
                                  <div key={optionIndex} className="flex items-center space-x-3">
                                    <RadioGroupItem value={optionIndex.toString()} id={`q${questionIndex}-option${optionIndex}`} />
                                    <FormField
                                      control={form.control}
                                      name={`questions.${questionIndex}.options.${optionIndex}.text`}
                                      render={({ field: optionField }) => (
                                        <FormItem className="flex-1">
                                          <FormControl>
                                            <Input
                                              placeholder={`Answer ${String.fromCharCode(65 + optionIndex)}`}
                                              className="border-gray-300 focus:border-coral-red focus:ring-coral-red"
                                              {...optionField}
                                            />
                                          </FormControl>
                                        </FormItem>
                                      )}
                                    />
                                  </div>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button 
                  type="button" 
                  onClick={() => sendsol(form.getValues('donation'))} 
                  className="px-12 py-4 text-lg bg-[#ff5840] hover:bg-[#ff5840]/90 text-white"
                >
                  Launch Campaign
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SponsorPromo;
