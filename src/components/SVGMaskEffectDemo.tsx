"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

const SVGMaskEffectDemo = () => {
  return (
    <div className="h-[40rem] bg-slate-950 w-full flex items-center justify-center overflow-hidden">
    <MaskContainer
      revealText={
        <p className="w-full px-5 mx-auto text-slate-200 text-center  text-4xl font-bold">
          The first rule of MRR Club is you do not talk about MRR Club. The
          second rule of MRR Club is you DO NOT talk about MRR Club.
        </p>
      }
      className="h-[40rem] bg-slate-900 rounded-md"
    >
      The first rule of <span className="text-red-500">MRR Club</span> is you
      do not talk about MRR Club. The second rule of MRR Club is you DO NOT
      talk about <span className="text-red-500">MRR Club</span>.
    </MaskContainer>
  </div>
  )
}

export default SVGMaskEffectDemo
