import animalDB from "@/utils/animalDB";
import AnimalDetails from "@/components/AnimalDetails";
import { notFound } from "next/navigation";

const AnimalDetailsPage = async ({ params }) => {
    const { id } = await params;
    const animal = await animalDB.queryById(id);
    if (!animal) notFound();

    return (
        <AnimalDetails animal={animal} />
    );
};

export default AnimalDetailsPage;