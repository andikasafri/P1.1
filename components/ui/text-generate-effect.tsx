"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      // This one is for if more than 6 words than there will be different colors for 2 of each words
      //   <motion.div ref={scope}>
      //     {wordsArray.map((word, idx) => {
      //       // Determine color based on index
      //       let colorClass = "dark:text-white text-black";

      //       if (idx > 2) {
      //         const cycle = Math.floor((idx - 3) / 2) % 3;
      //         colorClass = [
      //           "text-purple-600",
      //           "text-yellow-500",
      //           "text-blue-600",
      //         ][cycle];
      //       }

      //       return (
      //         <motion.span
      //           key={`${word}-${idx}`}
      //           className={`${colorClass} opacity-0`}
      //           style={{ filter: filter ? "blur(10px)" : "none" }}
      //           initial={{ opacity: 0 }}
      //           animate={{ opacity: 1 }}
      //           transition={{ delay: idx * 0.1 }}
      //         >
      //           {word} {/* Maintain space between words */}
      //         </motion.span>
      //       );
      //     })}
      //   </motion.div>
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={`${word}-${idx}`}
            className={`
          opacity-0
          ${idx > 5 ? "text-green-400" : "dark:text-white text-black"}
        `}
            style={{ filter: filter ? "blur(10px)" : "none" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
