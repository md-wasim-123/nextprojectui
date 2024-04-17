import HerroSection from "@/components/HerroSection";
import FeaturCoures from "@/components/FeaturCoures";
import Cards from "@/components/Cards";
import Upcoming from "@/components/Upcoming";
import People from "@/components/People";
import SVGMaskEffectDemo from "@/components/SVGMaskEffectDemo";
 

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HerroSection/>
      <FeaturCoures/>
      <Cards/>
      <Upcoming/>
      <People/>
      <SVGMaskEffectDemo/>
    </main>
  );
}
