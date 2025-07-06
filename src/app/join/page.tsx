
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Campaign {
  id: string;
  title: string;
  description: string;
  sponsor: string;
  prizePool: number;
  duration: string;
  startTime: string;
  questionsCount: number;
  isPublic: boolean;
}

const mockCampaigns: Campaign[] = [
  {
    id: '1',
    title: 'Tech Quiz Challenge',
    description: 'Test your knowledge of modern web technologies and win amazing prizes!',
    sponsor: 'TechCorp',
    prizePool: 500,
    duration: '5',
    startTime: '2024-01-15T10:00',
    questionsCount: 3,
    isPublic: true
  },
  {
    id: '2',
    title: 'Sports Trivia Bonanza',
    description: 'Show off your sports knowledge in this exciting trivia challenge.',
    sponsor: 'SportsNet',
    prizePool: 300,
    duration: '2',
    startTime: '2024-01-16T14:00',
    questionsCount: 5,
    isPublic: true
  },
  {
    id: '3',
    title: 'Movie Buff Quiz',
    description: 'Are you a true movie lover? Prove it in this cinematic quiz!',
    sponsor: 'CinemaPlus',
    prizePool: 200,
    duration: '10',
    startTime: '2024-01-17T18:00',
    questionsCount: 4,
    isPublic: false // This won't be shown
  }
];

const Join = () => {
  // Filter to show only public campaigns
  const publicCampaigns = mockCampaigns.filter(campaign => campaign.isPublic);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Join Quiz Campaigns</h1>
          <p className="text-lg text-gray-600">Participate in sponsored quiz campaigns and win amazing prizes!</p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicCampaigns.map((campaign) => (
            <Card key={campaign.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-xl text-black">{campaign.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  Sponsored by {campaign.sponsor}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{campaign.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Prize Pool:</span>
                    <span className="font-semibold text-green-600">${campaign.prizePool}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{campaign.duration} minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Questions:</span>
                    <span className="font-semibold">{campaign.questionsCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Start Time:</span>
                    <span className="font-semibold">
                      {new Date(campaign.startTime).toLocaleString()}
                    </span>
                  </div>
                </div>

                <Link href={`/join/${campaign.id}`} className="block">
                  <Button className="w-full bg-[#ff5840] hover:bg-[#ff5840]/90 text-white">
                    Join Campaign
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Join;