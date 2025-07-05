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
          <div className="flex flex-col items-center justify-center mt-1 text-2xl text-neutral-600">
            <div className="mb-1">
              Turn Your Marketing Into a Rewarding Experience.  
            </div>
            <div>
              Sponsor Quizzes, Drive Unprecedented Engagement and Attention
          </div>
        </div>
        </div>
          {/* <div className="flex items-center justify-center mt-4 text-xl">
            <Link
              href={"https://x.com/siddharthb_/status/1940780218303590658"}
              className="px-4 py-2 text-black transition-colors hover:bg-white/10 rounded-lg border border-black cursor-pointer"
              target="_blank" 
              rel="noopener noreferrer" 
            >
              Check us out
            </Link>
          </div> */}
      <section className="py-8 px-6 bg-gradient-to-r from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div>
            <div className="text-4xl md:text-4xl font-bold text-black  text-center mb-12">
              Your Product is a Story Waiting to Be Told{' '}
              <div className="mt-2 ">Let's Make Them Eager to Listen</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16 mt-10 ">
            <div className="">
              <div className="text-center justify-center font-semibold mt-5 text-xl ">
                  Stop Interrupting, Start Engaging
              </div>
              <div className="p-3">
                <div className="p-2">
                  Traditional ads are a battle for fleeting attention. We believe there's a <span className="font-bold text-black">better </span> way.
                </div>
                <div className="p-2">
                  Imagine your audience choosing to spend time with your brand, not because they're forced to, but because they're genuinely interested and rewarded for their engagement.
                </div>
                <div className="p-2">
                  When people want to learn, they're open. Your message isn't marketing. It's <span className="font-bold text-black">value</span>.
                </div>
              </div>
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

      <section className="min-h-screen py-20 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            The Unfair Advantage: Why This Works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Check className="text-[#ff5840] w-5 h-5 mt-1 flex-shrink-0" /> 
                <div>
                  <h3 className="text-xl font-bold text-[#d1d5db] mb-2">Unmatched Engagement</h3>
                  <p className="text-[#9ca3af] leading-relaxed">
                    Move beyond passive impressions. Our users actively participate, spending 3-5 minutes fully focused on your brand message—something traditional ads can never achieve.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="text-[#ff5840] w-5 h-5 mt-1 flex-shrink-0" /> 
                <div>
                  <h3 className="text-xl font-bold text-[#d1d5db] mb-2">Guaranteed ROI</h3>
                  <p className="text-[#9ca3af] leading-relaxed">
                    You set the budget, we deliver the engagement. <br/>Pay only for completed interactions, not for ads that might be ignored .
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Check className="text-[#ff5840] w-5 h-5 mt-1 flex-shrink-0" /> 
                <div>
                  <h3 className="text-xl font-bold text-[#d1d5db] mb-2">Build Authentic Brand Champions</h3>
                  <p className="text-[#9ca3af] leading-relaxed">
                    When users are rewarded for their attention, they associate positive feelings with your brand. This creates genuine brand affinity, not ad fatigue.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="text-[#ff5840] w-5 h-5 mt-1 flex-shrink-0" /> 
                <div>
                  <h3 className="text-xl font-bold text-[#d1d5db] mb-2">The Crypto Advantage</h3>
                  <p className="text-[#9ca3af] leading-relaxed">
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

          <div className="border-t border-gray-800 pt-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Get Paid for What You Know
            </h2>
              <p className="text-lg text-[#d1d5db] mb-6 leading-relaxed text-center">
                  Your curiosity is valuable. Your knowledge has worth. Your attention deserves compensation.
              </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
               
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className=""/>
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
              
              <div className="bg-neutral-900/30  p-8 rounded-xl border border-neutral-900">
                <h3 className="text-2xl font-bold text-[#d1d5db] mb-6">How We Create a Win-Win Ecosystem:</h3>
                <p className="text-[#9ca3af] leading-relaxed mb-4">
                  Our platform thrives on a simple truth: <span className="text-coral-red font-semibold text-white">rewarded attention is the most valuable attention</span>. 
                </p>
                <p className="text-[#9ca3af] leading-relaxed">
                  Companies get engaged, interested users who actually want to learn about their products. You get paid for time you'd probably spend on social media anyway. <span className="text-white font-bold">Everyone wins</span>.
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
