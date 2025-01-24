"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Import shadcn Button
import { Card, CardContent } from "@/components/ui/card"; // Import shadcn Card
import { items, targets, Item, Target } from "../../constants"; // Import dataset

const MatchingGame = () => {
  const [draggableItems, setDraggableItems] = useState<Item[]>(items);
  const [targetStates, setTargetStates] = useState<
    { target: Target; item: Item | null }[]
  >(targets.map((target) => ({ target, item: null })));
  const [resultsChecked, setResultsChecked] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: Item) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(item));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData("text/plain")) as Item;
    const newTargetStates = [...targetStates];
    newTargetStates[index].item = item;
    setTargetStates(newTargetStates);

    // Remove the dropped item from the draggable items list
    setDraggableItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const checkResults = () => {
    setResultsChecked(true);
  };

  const handleShowCorrect = () => {
    setShowCorrect(true);
    // Set targets to the correct items
    const newTargetStates = targetStates.map((state) => ({
      ...state,
      item:
        items.find((item) => item.id === state.target.correctItemId) || null,
    }));
    setTargetStates(newTargetStates);
  };

  const handleReplay = () => {
    setDraggableItems(items); // Reset draggable items
    setTargetStates(targets.map((target) => ({ target, item: null }))); // Reset targets
    setResultsChecked(false); // Reset results checked
    setShowCorrect(false); // Reset show correct
  };

  const getBoxColor = (index: number) => {
    if (showCorrect) return "bg-green-200";
    if (!resultsChecked) return "bg-gray-200";
    return targetStates[index].item?.id ===
      targetStates[index].target.correctItemId
      ? "bg-green-200"
      : "bg-red-200";
  };

  return (
    <Card className="p-6 text-neutral-800 max-w-4xl mx-auto mt-10">
      <CardContent>
        <h2 className="text-2xl font-bold text-center mb-6">
          Çeşitli Kimyasal Maddelern Günlük Hayatta Kullanımı
        </h2>
        {/* Draggable Items (Horizontal) */}
        <div className="flex flex-wrap gap-4 mb-6">
          {draggableItems.map((item) => (
            <Card
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              className="p-4 bg-blue-100 rounded-lg cursor-move hover:bg-blue-200 transition-colors"
            >
              {item.name}
            </Card>
          ))}
        </div>

        {/* Target Boxes (Vertical) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {targetStates.map((state, index) => (
            <Card
              key={state.target.id}
              onDrop={(e) => handleDrop(e, index)}
              onDragOver={handleDragOver}
              className={`p-4 h-20 flex flex-col items-center justify-center rounded-lg ${getBoxColor(
                index
              )}`}
            >
              <div className="text-sm font-medium text-gray-600">
                {state.target.name}
              </div>
              <div className="text-lg font-bold">{state.item?.name}</div>
            </Card>
          ))}
        </div>

        {/* Button */}
        <Button
          onClick={
            showCorrect
              ? handleReplay
              : resultsChecked
              ? handleShowCorrect
              : checkResults
          }
          className="w-full"
        >
          {showCorrect
            ? "Replay"
            : resultsChecked
            ? "Show Correct"
            : "Check Results"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MatchingGame;
