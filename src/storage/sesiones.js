import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

function setTokens(tokens) {
  return localforage.setItem("tokens", tokens);
}

export async function getTokens(query) {
  await fakeNetwork(`getTokens:${query}`);
  let tokens = await localforage.getItem("tokens");
  if (!tokens) tokens = [];
  if (query) {
    tokens = matchSorter(tokens, query, { keys: ["first", "last"] });
  }
  return tokens.sort(sortBy("last", "createdAt"));
}

export async function getToken(id) {
  await fakeNetwork(`token:${id}`);
  let tokens = await localforage.getItem("tokens");
  let token = tokens.find((token) => token.id === id);
  return token ?? null;
}

export async function createToken(dataToken) {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let token = { id, createdAt: Date.now(), ...dataToken };
  let tokens = await getTokens();
  tokens.unshift(token);
  await setTokens(tokens);
  return token;
}

export async function updateToken(id, updates) {
  await fakeNetwork();
  let tokens = await localforage.getItem("tokens");
  let token = tokens.find((token) => token.id === id);
  if (!token) throw new Error("No token found for", id);
  Object.assign(token, updates);
  await setTokens(tokens);
  return token;
}

export async function deleteToken(id) {
  let tokens = await localforage.getItem("tokens");
  let index = tokens.findIndex((token) => token.id === id);
  if (index > -1) {
    tokens.splice(index, 1);
    await setTokens(tokens);
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
