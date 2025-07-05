'use client'
import { motion}  from "framer-motion"

import TextrotateComponent from "@/components/Textrotate"

import { Check, Target, TargetIcon } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return(
    <div>
      <div className="h-screen ">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center mt-12">
            <div className="text-6xl font-bold">
              Stop Shouting into the Void
            </div>
            <TextrotateComponent />
        </div>
        <div className="flex flex-col items-center justify-center mt-1 text-2xl text-neutral-600">
            <div className="mb-1">
              Turn Your Marketing Into a Rewarding Experience.  
            </div>
            <div>
              Sponsor Quizzes, Drive Unprecedented Engagement and Attention
            </div>
        </div>
          <div className="flex items-center justify-center mt-4 text-xl">
            {/* Apply styles directly to the Link component */}
            <Link
              href={"https://x.com/siddharthb_/status/1940780218303590658"}
              className="px-4 py-2 text-black transition-colors hover:bg-white/10 rounded-lg border border-black cursor-pointer"
              target="_blank" 
              rel="noopener noreferrer" 
            >
              Check us out
            </Link>
          </div>
      <section className="py-10 px-6 bg-gradient-to-r from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
            Your Product is a Story Waiting to Be Told.{' '}
            <br />
            <span className="text-coral-red">Let's Make Them Eager to Listen.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-lg text-black mb-6 leading-relaxed">
                Traditional ads fight for fleeting seconds of interrupted attention.
                <br/>
                 We create moments where your audience actively chooses to engage with your brand—and gets rewarded for it.
              </p>
              <p className="text-lg text-black leading-relaxed">
                When people are genuinely interested in learning, they're at their most receptive to new information. That's when your message doesn't feel like marketing—it feels like value.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">How It Works in 3 Simple Steps:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div>
                    <p className="font-semibold text-black">Create Your Campaign</p>
                    <p className="text-gray-700 text-sm">Set your budget, and quiz topics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div>
                    <p className="font-semibold text-black">Users Take Quizzes</p>
                    <p className="text-gray-700 text-sm">Engaged users interact with your content</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div>
                    <p className="font-semibold text-black">Measure Results</p>
                    <p className="text-gray-700 text-sm">Track engagement and ROI in real-time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            The Unfair Advantage: Why This Works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Check className="text-[#ff5840] w-5 h-5 mt-1 flex-shrink-0" /> 
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Unmatched Engagement</h3>
                  <p className="text-white leading-relaxed">
                    Move beyond passive impressions. Our users actively participate, spending 3-5 minutes fully focused on your brand message—something traditional ads can never achieve.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="text-[#ff5840] w-5 h-5 mt-1 flex-shrink-0" /> 
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Guaranteed ROI</h3>
                  <p className="text-white leading-relaxed">
                    You set the budget, we deliver the engagement. Pay only for completed interactions, not for ads that might be ignored or blocked.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Check className="text-[#ff5840] w-5 h-5 mt-1 flex-shrink-0" /> 
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Build Authentic Brand Champions</h3>
                  <p className="text-white leading-relaxed">
                    When users are rewarded for their attention, they associate positive feelings with your brand. This creates genuine brand affinity, not ad fatigue.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="text-[#ff5840] w-5 h-5 mt-1 flex-shrink-0" /> 
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">The USDC Advantage</h3>
                  <p className="text-white leading-relaxed">
                    We use USDC (USD Coin) for instant, global payments. No banking delays, no geographic restrictions—just immediate value delivery to your engaged audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-15">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center font-semibold">
              <Link
                  href="https://x.com/siddharthb_/status/1940780218303590658" 
                  className="text-lg px-6 py-3 bg-black hover:bg-white text-white hover:text-black border border-white rounded-xl transition-all duration-400 ease-in-out"
                  target="_blank"
                >
                  See a Case Study
                </Link>
            </div>
          </div>

          {/* For Quiz Takers Section - Now inside black background */}
          <div className="border-t border-gray-800 pt-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Get Paid for What You Know.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-white mb-6 leading-relaxed">
                  Your curiosity is valuable. Your knowledge has worth. Your attention deserves compensation.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="bg-amber-200"/>
                    <p className="text-white">Earn USDC for every quiz you complete</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-coral-red w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-white">Choose from topics you're genuinely interested in</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-coral-red w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-white">Learn something new while getting rewarded</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-coral-red w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-white">Instant payments, no waiting periods</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">How We Create a Win-Win Ecosystem:</h3>
                <p className="text-white leading-relaxed mb-4">
                  Our platform thrives on a simple truth: <span className="text-coral-red font-semibold">rewarded attention is the most valuable attention</span>. 
                </p>
                <p className="text-white leading-relaxed">
                  Companies get engaged, interested users who actually want to learn about their products. You get paid for time you'd probably spend on social media anyway. Everyone wins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
    </div>
  )
}
