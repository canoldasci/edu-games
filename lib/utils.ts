import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createMolecules = (tempIndex: number) => {
  const baseSpeed = 1 / ((tempIndex + 1) * 1.5); // tempIndex büyüdükçe süre azalır, hız artar
  const randomFactor = Math.random() * 2 + 4;
  const animationSpeed = baseSpeed * randomFactor;
  const positions = Array.from({ length: 15 }).map(() => {
    return {
      bottom: Math.random() * 100,
      left: Math.random() * 90,
      animation: `moveMolecule ${animationSpeed}s infinite alternate`,
    };
  });
  return positions;
};
