import AnimalsList from "@/components/AnimalsList";
import animalDB from "@/utils/animalDB";


const AllAnimalsPage = async () => {
    const animalsArray = await animalDB.queryAll();
    return (
        <AnimalsList animalsArray={animalsArray} />
    );
};

export default AllAnimalsPage;