import BlackFridayBanner from "@/components/landing/banner/black-friday";
import LandingGallery from "@/components/landing/gallery/gallery";
import Navbar from "@/components/landing/navigation/navbar";

export default function Home() {
  return (
    <main>
      <BlackFridayBanner />
      <Navbar />
      <LandingGallery />
    </main>
  );
}
