'use client'
import { motion}  from "framer-motion"

import TextRotate from "@/fancy/components/text/text-rotate"
import TextrotateComponent from "@/components/Textrotate"

export default function Home() {
  return(
    <div className="border border-red-300">
       <div className="flex flex-col items-center justify-center mt-16">
          <div className="text-6xl font-bold">
            Stop Shouting into the Void
          </div>
          <TextrotateComponent />
       </div>
       <div>
        
       </div>
    </div>
  )
}
