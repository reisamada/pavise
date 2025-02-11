"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "@/components/ui/particles";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { RainbowButton } from "@/components/ui/rainbow-button";

import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

import Footer from "./components/footer/Footer";

import Description from "./components/description/Description";
import { FileInput } from "./components/fileinput/FileInput";
import Image from "next/image";


export default function Home() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
  return (
    <>
      <main>
        <section>
          <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <div className="w-40 h-40 rounded-full overflow-hidden mt-2 mb-3 shadow-lg relative">
              <Image
                src="/img/Abstract_Split_Face_Artwork_With_Mosaic_Textures-removebg-preview.png"
                alt="Abstract split face artwork with mosaic textures"
                width={150}
                height={150}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex items-center justify-center">
              <AnimatedGradientText>
                🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                  )}
                >
                  Beta Version
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
            </div><span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none">
              <TypingAnimation>Pavise – AI Agent for Brain Tumor Diagnosis</TypingAnimation>
            </span>
            <div className="text-center mb-4 container mx-auto">
              <p>Pavise is an advanced AI-driven solution designed to assist in the early detection and diagnosis of brain tumors. By leveraging cutting-edge artificial intelligence, Pavise analyzes medical data with unmatched accuracy, providing fast and reliable insights for healthcare professionals.</p>
            </div>
            <div className="flex gap-1">
              <div>
                <RainbowButton className="text-white">Get Started</RainbowButton>
              </div>
              <div>
                <RainbowButton className="text-white btn-white">More</RainbowButton>
              </div>
            </div>
            <Particles
              className="absolute inset-0 z-0"
              quantity={100}
              ease={80}
              color={color}
              refresh
            />
          </div>
        </section>
        <section className="bg-black py-4 text-white">
          <div>
            <Description />
          </div>

          <div className="flex justify-center mt-10">
            <FileInput
              id="document-upload"
              multiple
              accept=".jpg,.png,.jpeg"
              onChange={(e) => {
                console.log("Files selected:", e.target.files);
              }}
            />
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}
