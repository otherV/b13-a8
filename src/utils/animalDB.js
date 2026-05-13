const DEPLOY_PATH = process.env.NEXT_PUBLIC_BASE_URL;

const animalDB = {
  queryAll: async () => {
    const res = await fetch(`${DEPLOY_PATH}/animals.json`, { cache: "no-cache" });
    return res.json();
  },

  queryById: async (id) => {
    const animals = await animalDB.queryAll();
    return animals.find((a) => a.id === Number(id)) ?? null;
  },
};

export default animalDB;