import Banner from "@/components/Banner";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import Hotline from "@/components/Hotline";
import QurbaniTips from "@/components/QurbaniTips";
import StatBar from "@/components/StatBar";
import TopBreeds from "@/components/TopBreeds";

const HomePage = () => {
  return (
    <>
      <Banner />
      <div className="container mx-auto max-w-7/10">
        <StatBar />
        <FeaturedAnimals />
        <QurbaniTips />
        <TopBreeds />
        <Hotline />
      </div>
    </>
  );
}

export default HomePage;
