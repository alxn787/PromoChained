'use client'
import { motion}  from "framer-motion"

import TextrotateComponent from "@/components/Textrotate"
import { ButtonShineExample } from "@/fancy/components/text/button"

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
            <div className="mt-2.5">
              <button className=" px-4 py-2 text-black transition-colors hover:bg-white/10 rounded-lg border border-black cursor-pointer">
                Check us out
              </button>
            </div>
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
                Traditional advertising fights for fleeting seconds of interrupted attention. We create moments where your audience actively chooses to engage with your brand—and gets rewarded for it.
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

      </div>

      <div className="bg-black h-screen">

      </div>
    </div>
  )
}
