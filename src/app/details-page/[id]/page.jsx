import animalDB from "@/utils/animalDB";
import AnimalDetails from "@/components/AnimalDetails";
import { redirect, notFound } from "next/navigation";
import { auth } from "@/utils/auth";
import { headers } from "next/headers";

const AnimalDetailsPage = async ({ params }) => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    if (!session) redirect("/login");

    const { id } = await params;
    const animal = await animalDB.queryById(id);
    if (!animal) notFound();

    return <AnimalDetails animal={animal} />;
};

export default AnimalDetailsPage;