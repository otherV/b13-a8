const DEPLOY_PATH = "http://localhost:3000";

const animalDB = {
  queryAll: async () => {
    const res = await fetch(`${DEPLOY_PATH}/animals.json`, { cache: "force-cache" });
    return res.json();
  },

  queryById: async (id) => {
    const animals = await animalDB.queryAll();
    return animals.find((a) => a.id === Number(id)) ?? null;
  },
};

export default animalDB;