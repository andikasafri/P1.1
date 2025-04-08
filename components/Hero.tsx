import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import { cn } from "../lib/utils";

const Hero = () => {
  return (
    <div className="pb-20 pt-3 relative">
      {/* Spotlight Section (Full Screen) */}
      <div className="relative h-screen w-full">
        {/* Spotlight Component */}
        <Spotlight />

        {/* Grid Background */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:60px_60px]",
            "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />

        {/* Radial Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        {/* Title Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center pt-50 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] text-center">
            <h2
              className="uppercase tracking-widest text-xs text-blue-100 
                         drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              Dynamic Web Magic with Next.js
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
