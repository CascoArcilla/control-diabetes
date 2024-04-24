import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

function setAlimentos(alimentos) {
  return localforage.setItem("alimentos", alimentos);
}

export async function getAlimentos(query) {
  await fakeNetwork(`getAlimentos:${query}`);
  let alimentos = await localforage.getItem("alimentos");
  if (!alimentos) alimentos = [];
  if (query) {
    alimentos = matchSorter(alimentos, query, { keys: ["first", "last"] });
  }
  return alimentos.sort(sortBy("last", "createdAt"));
}

export async function getAlimento(id) {
  await fakeNetwork(`alimento:${id}`);
  let alimentos = await localforage.getItem("alimentos");
  let alimento = alimentos.find((alimento) => alimento.id === id);
  return alimento ?? null;
}

export async function createAlimento() {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let alimento = { id, createdAt: Date.now() };
  let alimentos = await getAlimentos();
  alimentos.unshift(alimento);
  await setAlimentos(alimentos);
  return alimento;
}

export async function updateAlimento(id, updates) {
  await fakeNetwork();
  let alimentos = await localforage.getItem("alimentos");
  let alimento = alimentos.find((alimento) => alimento.id === id);
  if (!alimento) throw new Error("No alimento found for", id);
  Object.assign(alimento, updates);
  await setAlimentos(alimentos);
  return alimento;
}

export async function deleteAlimento(id) {
  let alimentos = await localforage.getItem("alimentos");
  let index = alimentos.findIndex((user) => user.id === id);
  if (index > -1) {
    alimentos.splice(index, 1);
    await setAlimentos(alimentos);
    return true;
  }
  return false;
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
