'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { usePathname } from 'next/navigation';

interface Answer {
  questionId: string;
  selectedOption: number;
}

interface JoinFormData {
  playerName: string;
  email: string;
  answers: Answer[];
}

interface QuestionOption {
  text: string;
}

interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
}

interface CampaignDetails {
  id: string;
  title: string;
  description: string;
  sponsor: string;
  prizePool: number;
  duration: string;
  startTime: string;
  questions: Question[];
  isPublic: boolean;
}

// Mock campaign details with multiple choice questions
const mockCampaignDetails: { [key: string]: CampaignDetails } = {
  '1': {
    id: '1',
    title: 'Tech Quiz Challenge',
    description: 'Test your knowledge of modern web technologies and win amazing prizes!',
    sponsor: 'TechCorp',
    prizePool: 500,
    duration: '5',
    startTime: '2024-01-15T10:00',
    isPublic: true,
    questions: [
      { 
        id: 'q1', 
        text: 'What does HTML stand for?',
        options: [
          { text: 'HyperText Markup Language' },
          { text: 'High Tech Modern Language' },
          { text: 'Home Tool Markup Language' },
          { text: 'Hyperlink and Text Markup Language' }
        ]
      },
      { 
        id: 'q2', 
        text: 'Which JavaScript framework is maintained by Facebook?',
        options: [
          { text: 'Angular' },
          { text: 'Vue.js' },
          { text: 'React' },
          { text: 'Svelte' }
        ]
      },
      { 
        id: 'q3', 
        text: 'What is the latest version of CSS?',
        options: [
          { text: 'CSS2' },
          { text: 'CSS3' },
          { text: 'CSS4' },
          { text: 'CSS5' }
        ]
      }
    ]
  },
  '2': {
    id: '2',
    title: 'Sports Trivia Bonanza',
    description: 'Show off your sports knowledge in this exciting trivia challenge.',
    sponsor: 'SportsNet',
    prizePool: 300,
    duration: '2',
    startTime: '2024-01-16T14:00',
    isPublic: true,
    questions: [
      { 
        id: 'q1', 
        text: 'Which country won the FIFA World Cup in 2018?',
        options: [
          { text: 'Brazil' },
          { text: 'Germany' },
          { text: 'France' },
          { text: 'Argentina' }
        ]
      },
      { 
        id: 'q2', 
        text: 'How many players are on a basketball team on the court at one time?',
        options: [
          { text: '4' },
          { text: '5' },
          { text: '6' },
          { text: '7' }
        ]
      },
      { 
        id: 'q3', 
        text: 'In which sport would you perform a slam dunk?',
        options: [
          { text: 'Tennis' },
          { text: 'Football' },
          { text: 'Basketball' },
          { text: 'Volleyball' }
        ]
      },
      { 
        id: 'q4', 
        text: 'What is the maximum score in ten-pin bowling?',
        options: [
          { text: '200' },
          { text: '250' },
          { text: '300' },
          { text: '350' }
        ]
      },
      { 
        id: 'q5', 
        text: 'Which tennis tournament is played on grass courts?',
        options: [
          { text: 'US Open' },
          { text: 'French Open' },
          { text: 'Wimbledon' },
          { text: 'Australian Open' }
        ]
      }
    ]
  },
  '3': {
    id: '3',
    title: 'Movie Buff Quiz',
    description: 'Are you a true movie lover? Prove it in this cinematic quiz!',
    sponsor: 'CinemaPlus',
    prizePool: 200,
    duration: '10',
    startTime: '2024-01-17T18:00',
    isPublic: false,
    questions: [
      { 
        id: 'q1', 
        text: 'Who directed the movie "Inception"?',
        options: [
          { text: 'Steven Spielberg' },
          { text: 'Christopher Nolan' },
          { text: 'Martin Scorsese' },
          { text: 'Quentin Tarantino' }
        ]
      },
      { 
        id: 'q2', 
        text: 'Which movie won the Academy Award for Best Picture in 2020?',
        options: [
          { text: 'Joker' },
          { text: '1917' },
          { text: 'Parasite' },
          { text: 'Once Upon a Time in Hollywood' }
        ]
      },
      { 
        id: 'q3', 
        text: 'What is the name of the coffee shop in the TV show "Friends"?',
        options: [
          { text: 'Central Perk' },
          { text: 'The Grind' },
          { text: 'Java Joe\'s' },
          { text: 'Coffee Corner' }
        ]
      },
      { 
        id: 'q4', 
        text: 'In which movie does Tom Hanks say "Life is like a box of chocolates"?',
        options: [
          { text: 'Cast Away' },
          { text: 'Forrest Gump' },
          { text: 'Big' },
          { text: 'Philadelphia' }
        ]
      }
    ]
  }
};

const JoinCampaign = () => {
  const params = usePathname().split('/');
  const campaignId = params[2];
  const campaign = campaignId ? mockCampaignDetails[campaignId] : null;

  const form = useForm<JoinFormData>({
    defaultValues: {
      playerName: '',
      email: '',
      answers: campaign?.questions.map(q => ({ questionId: q.id, selectedOption: 0 })) || []
    },
  });

  const onSubmit = (data: JoinFormData) => {
    console.log('Form submitted:', data);
  };

  if (!campaign) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Campaign Not Found</h1>
          <p className="text-gray-600">The requested campaign could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Campaign Header */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-black">{campaign.title}</CardTitle>
            <CardDescription className="text-lg">
              Sponsored by {campaign.sponsor}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{campaign.description}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold text-green-600">${campaign.prizePool}</div>
                <div className="text-gray-600">Prize Pool</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold">{campaign.duration} min</div>
                <div className="text-gray-600">Duration</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold">{campaign.questions.length}</div>
                <div className="text-gray-600">Questions</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold">
                  {new Date(campaign.startTime).toLocaleDateString()}
                </div>
                <div className="text-gray-600">Start Date</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Join Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-black">Join This Campaign</CardTitle>
            <CardDescription>
              Fill out your details and answer the questions to participate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="playerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black font-semibold">Your Name*</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your name" 
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black font-semibold">Email Address*</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="Enter your email" 
                            className="border-gray-300 focus:border-coral-red focus:ring-coral-red"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Questions */}
                <div className="space-y-8">
                  <h3 className="text-xl font-bold text-black">Campaign Questions</h3>
                  {campaign.questions.map((question, questionIndex) => (
                    <div key={question.id} className="border border-gray-200 rounded-lg p-6 space-y-4">
                      <h4 className="text-lg font-semibold text-black">
                        Question {questionIndex + 1}: {question.text}
                      </h4>
                      
                      <FormField
                        control={form.control}
                        name={`answers.${questionIndex}.selectedOption`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <RadioGroup
                                onValueChange={(value) => field.onChange(Number(value))}
                                value={field.value?.toString()}
                                className="grid grid-cols-1 gap-3"
                              >
                                {question.options.map((option, optionIndex) => (
                                  <div key={optionIndex} className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                                    <RadioGroupItem 
                                      value={optionIndex.toString()} 
                                      id={`q${questionIndex}-option${optionIndex}`} 
                                    />
                                    <label 
                                      htmlFor={`q${questionIndex}-option${optionIndex}`}
                                      className="flex-1 cursor-pointer text-gray-700"
                                    >
                                      {String.fromCharCode(65 + optionIndex)}. {option.text}
                                    </label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <Button 
                    type="submit" 
                    className="px-12 py-4 text-lg bg-[#ff5840] hover:bg-[#ff5840]/90 text-white"
                  >
                    Submit Entry
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JoinCampaign;