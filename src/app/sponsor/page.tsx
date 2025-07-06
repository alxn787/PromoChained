'use client'
import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { InfoIcon, Upload, Plus, Trash2 } from 'lucide-react';

interface Question {
  text: string;
}

interface SponsorFormData {
  username: string;
  gameTitle: string;
  donation: number;
  gameStartTime: string;
  uploadImage: FileList;
  quizDuration: string;
  questions: Question[];
}

const SponsorPromo = () => {
  const form = useForm<SponsorFormData>({
    defaultValues: {
      username: '',
      gameTitle: '',
      donation: 0,
      gameStartTime: '',
      quizDuration: '1',
      questions: [{ text: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'questions',
  });

  const onSubmit = (data: SponsorFormData) => {
    console.log('Form submitted:', data);
  };

  const addQuestion = () => {
    append({ text: '' });
  };

  const removeQuestion = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

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

              {/* Financial Info Row */}
              <div className="grid md:grid-cols-1 gap-6">
                <FormField
                  control={form.control}
                  name="donation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-black font-semibold">
                        Donation to prize pool by you
                        <InfoIcon className="w-4 h-4 text-gray-400" />
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="0"
                          className="border-gray-300 focus:border-coral-red focus:ring-coral-red"
                          {...field} 
                          onChange={(e) => field.onChange(Number(e.target.value))}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Game Start Time, Upload and Duration Row */}
              <div className="grid md:grid-cols-3 gap-6">
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
                  name="uploadImage"
                  render={({ field: { onChange, value, ...field } }) => (
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
                            onChange={(e) => onChange(e.target.files)}
                            {...field}
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
                  name="quizDuration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-black font-semibold">
                        Quiz Duration (minutes)*
                        <InfoIcon className="w-4 h-4 text-gray-400" />
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-gray-300 focus:border-coral-red focus:ring-coral-red">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">1 minute</SelectItem>
                          <SelectItem value="2">2 minutes</SelectItem>
                          <SelectItem value="5">5 minutes</SelectItem>
                          <SelectItem value="10">10 minutes</SelectItem>
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

                {fields.map((field, index) => (
                  <div key={field.id} className="border border-gray-200 rounded-lg p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-black">Question {index + 1}</h4>
                      {fields.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeQuestion(index)}
                          className="text-red-600 border-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    
                    <FormField
                      control={form.control}
                      name={`questions.${index}.text`}
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
                  </div>
                ))}
                </div>

              {/* Submit Button */}
              <div className="flex justify-center ">
                <Button className="px-12 py-4 text-lg">
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