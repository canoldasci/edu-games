export interface Item {
  id: string;
  name: string;
  image?: string;
  description?: string;
}

export interface Target {
  id: string;
  name: string;
  correctItemId: string; // ID of the correct item for this target
}

export interface Level {
  level: number;
  timeLimit: number; // Time limit in seconds
  items: Item[];
  targets: Target[];
}
