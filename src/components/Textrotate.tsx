import { motion } from "framer-motion"
import TextRotate from "@/fancy/components/text/text-rotate"

export default function TextrotateComponent() {
  return (
    <div className="text-2xl sm:text-3xl md:text-5xl flex flex-row items-center justify-center font-overused-grotesk bg-white dark:text-muted text-foreground font-light overflow-hidden p-6 sm:p-20 md:p-6">
        <motion.div className="flex whitespace-pre" >
          <motion.span
            className="pt-0.5 sm:pt-1 md:pt-2 font-medium"
            layout
            transition={{ type: "spring", damping: 300, stiffness: 800 }}
          >
            Promotions Made{" "}
          </motion.span>
          <TextRotate
            texts={[
              "better!",
              "fun",
              "easy",
              "effective",
            ]}
            mainClassName="text-white px-2 sm:px-2 md:px-3 bg-[#ff5941] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%",filter: "blur(5px)" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%"}}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </motion.div>
      </div>
  )
}