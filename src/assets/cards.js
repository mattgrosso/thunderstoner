import { monsters } from "./monsters.js";
import { heroes } from "../assets/heroes.js";
import { villages } from "../assets/villages.js";
import { thunderstoneBearers } from "./thunderstoneBearers.js";

export const cards = {
  ...monsters,
  ...heroes,
  ...villages,
  ...thunderstoneBearers
}
