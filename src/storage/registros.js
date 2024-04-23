import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

function setRegistros(registros) {
  return localforage.setItem("registros", registros);
}

export async function getRegistros(query) {
  await fakeNetwork(`getRegistros:${query}`);
  let registros = await localforage.getItem("registros");
  if (!registros) registros = [];
  if (query) {
    registros = matchSorter(registros, query, { keys: ["first", "last"] });
  }
  return registros.sort(sortBy("last", "createdAt"));
}

export async function getAlimento(id) {
  await fakeNetwork(`Alimento:${id}`);
  let registros = await localforage.getItem("registros");
  let registro = registros.find((registro) => registro.id === id);
  return registro ?? null;
}

export async function createAlimento() {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let registro = { id, createdAt: Date.now() };
  let registros = await getRegistros();
  registros.unshift(registro);
  await setRegistros(registros);
  return registro;
}

export async function updateAlimento(id, updates) {
  await fakeNetwork();
  let registros = await localforage.getItem("registros");
  let registro = registros.find((registro) => registro.id === id);
  if (!registro) throw new Error("No registro found for", id);
  Object.assign(registro, updates);
  await setRegistros(registros);
  return registro;
}

export async function deleteAlimento(id) {
  let registros = await localforage.getItem("registros");
  let index = registros.findIndex((user) => user.id === id);
  if (index > -1) {
    registros.splice(index, 1);
    await setRegistros(registros);
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
