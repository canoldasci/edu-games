export interface Item {
  id: string;
  name: string;
  description: string; // Optional: Add a description for each theory
}

export const atomicTheories: Item[] = [
  {
    id: "1",
    name: "Democritus' Atomic Theory",
    description:
      "Proposed that matter is composed of indivisible particles called 'atomos'.",
  },
  {
    id: "2",
    name: "Dalton's Atomic Theory",
    description:
      "Introduced the idea that atoms are indivisible and combine in fixed ratios.",
  },
  {
    id: "3",
    name: "Thomson's Plum Pudding Model",
    description:
      "Suggested that atoms are made of positively charged matter with electrons embedded in it.",
  },
  {
    id: "4",
    name: "Rutherford's Nuclear Model",
    description:
      "Discovered the nucleus and proposed that atoms are mostly empty space.",
  },
  {
    id: "5",
    name: "Bohr's Planetary Model",
    description:
      "Introduced the idea of electrons orbiting the nucleus in fixed energy levels.",
  },
  {
    id: "6",
    name: "Quantum Mechanical Model",
    description:
      "Describes electrons as existing in probability clouds rather than fixed orbits.",
  },
];
