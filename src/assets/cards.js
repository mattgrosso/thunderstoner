import { monsters } from "./monsters.js";
import { heroes } from "../assets/heroes.js";
import { villages } from "../assets/villages.js";

export const cards = {
  ...monsters,
  ...heroes,
  ...villages
}
