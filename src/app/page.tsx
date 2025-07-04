'use client'
import { motion}  from "framer-motion"

import TextRotate from "@/fancy/components/text/text-rotate"
import TextrotateComponent from "@/components/Textrotate"
import { ButtonShineExample } from "@/fancy/components/text/button"

export default function Home() {
  return(
    <div className="border border-red-300">
       <div className="flex flex-col items-center justify-center mt-16">
          <div className="text-6xl font-bold">
            Stop Shouting into the Void
          </div>
          <TextrotateComponent />
       </div>
       <div className="flex flex-col items-center justify-center mt-4 text-2xl">
          <div className="mb-1">
            Turn Your Marketing Into a Rewarding Experience.  
          </div>
          <div>
            Sponsor Quizzes, Drive Unprecedented Engagement and Attention
          </div>
       </div>
       <div className="flex items-center justify-center mt-4 text-2xl">
          <div>
            <ButtonShineExample />
          </div>
       </div>
    </div>
  )
}
