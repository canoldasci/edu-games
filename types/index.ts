export interface Item {
  id: string;
  name: string;
  image?: string;
  description?: string;
}

export interface Target {
  id: string;
  name?: string;
  correctItemId: string; // ID of the correct item for this target
  item?: Item | null;
}

export interface Level {
  level: number;
  timeLimit: number; // Time limit in seconds
  items: Item[];
  targets: Target[];
  orderingType?: string;
  description?: string;
}

export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  category: string;
  atomicMass: string;
  electronConfiguration: string;
  discoveredYear: string;
  group: number; // Grup numarası (1-18)
  period: number; // Periyot numarası (1-7)
}

export interface orderingLevel {
  level: number;
  timeLimit: number; // Time limit in seconds
  orderingType: string;
  items: Item[];
}
// types.ts
export interface Liquid {
  name: string;
  color: string;
  surfaceTension: number; // mN/m
  wettability: string;
  description: string;
  behavior: string;
}

export interface Surface {
  name: string;
  color: string;
  type: string;
  description: string;
}

export interface SimulationResult {
  meniscusType: string;
  capillaryEffect: string;
  dropletShape: string;
}

export interface InteractionResult {
  meniscusType: string;
  capillaryEffect: string;
  dropletShape: string;
}
