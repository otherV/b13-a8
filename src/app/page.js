import Banner from "@/components/Banner";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import Hotline from "@/components/Hotline";
import QurbaniTips from "@/components/QurbaniTips";
import TopBreeds from "@/components/TopBreeds";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container mx-auto max-w-7/10">
        <FeaturedAnimals />
        <QurbaniTips />
        <TopBreeds />
        <Hotline />
      </div>
    </>
  );
}
