import { Item } from "./types/index";
export const shuffleArray = (array: Item[]): Item[] => {
  return array.sort(() => Math.random() - 0.5);
};
