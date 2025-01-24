"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Import shadcn Button
import { Card, CardContent } from "@/components/ui/card"; // Import shadcn Card
import { atomicTheories, Item } from "../../../constants/orderingGameDataSets"; // Import dataset

const AtomicTheoriesOrderingGame = () => {
  const [draggableItems, setDraggableItems] = useState<Item[]>(atomicTheories);
  const [orderedItems, setOrderedItems] = useState<(Item | null)[]>(
    Array(atomicTheories.length).fill(null)
  );
  const [resultsChecked, setResultsChecked] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: Item) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(item));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData("text/plain")) as Item;

    // Remove the item from the draggable items list
    setDraggableItems((prevItems) => prevItems.filter((i) => i.id !== item.id));

    // Add the item to the ordered list at the specified index
    const newOrderedItems = [...orderedItems];
    newOrderedItems[index] = item;
    setOrderedItems(newOrderedItems);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const checkResults = () => {
    setResultsChecked(true);
  };

  const handleShowCorrect = () => {
    setShowCorrect(true);
    // Set the ordered list to the correct order
    setOrderedItems([...atomicTheories]);
  };

  const handleReplay = () => {
    setDraggableItems(atomicTheories); // Reset draggable items
    setOrderedItems(Array(atomicTheories.length).fill(null)); // Reset ordered list
    setResultsChecked(false); // Reset results checked
    setShowCorrect(false); // Reset show correct
  };

  const isCorrectOrder = () => {
    return orderedItems.every(
      (item, index) => item?.id === atomicTheories[index].id
    );
  };

  return (
    <Card className="p-6 max-w-6xl mx-auto mt-10">
      <CardContent>
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column: Draggable Theory Cards */}
          <div>
            <h2 className="text-lg font-bold mb-4">Theories</h2>
            <div className="space-y-4">
              {draggableItems.map((item) => (
                <Card
                  key={item.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item)}
                  className="p-4 bg-blue-100 rounded-lg cursor-move hover:bg-blue-200 transition-colors"
                >
                  <div className="font-bold">{item.name}</div>
                  <div className="text-sm text-gray-600">
                    {item.description}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column: Numbered Drop Areas */}
          <div>
            <h2 className="text-lg font-bold mb-4">Order the Theories</h2>
            <div className="space-y-4">
              {orderedItems.map((item, index) => (
                <Card
                  key={index}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragOver={handleDragOver}
                  className={`p-4 flex items-start gap-4 rounded-lg ${
                    resultsChecked
                      ? item?.id === atomicTheories[index].id
                        ? "bg-green-200"
                        : "bg-red-200"
                      : "bg-gray-200"
                  }`}
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full border-2 border-gray-300 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    {item ? (
                      <>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm text-gray-600">
                          {item.description}
                        </div>
                      </>
                    ) : (
                      <div className="text-gray-500">Drop theory here</div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8">
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
        </div>

        {/* Result Message */}
        {resultsChecked && !showCorrect && (
          <div className="mt-4 text-center">
            {isCorrectOrder() ? (
              <p className="text-green-600">Correct order! 🎉</p>
            ) : (
              <p className="text-red-600">Incorrect order. Try again! ❌</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AtomicTheoriesOrderingGame;
