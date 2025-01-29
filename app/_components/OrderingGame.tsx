"use client";
import { useEffect } from "react";
import { shuffleArray } from "@/utils"; // shuffleArray fonksiyonunu içe aktar
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Shadcn Button'ı içe aktar
import { Card, CardContent } from "@/components/ui/card"; // Shadcn Card'ı içe aktar
import { Item } from "../../types/index"; // Veri türlerini içe aktar

interface DragDropGamePageProps {
  Items: Item[];
}

const OrderinGame = ({ Items }: DragDropGamePageProps) => {
  const [draggableItems, setDraggableItems] = useState<Item[]>([]); // Başlangıçta boş array
  const [orderedItems, setOrderedItems] = useState<(Item | null)[]>(
    Array(Items.length).fill(null)
  );
  const [resultsChecked, setResultsChecked] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: Item) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(item));
  };
  useEffect(() => {
    // Sadece istemci tarafında sıralama işlemi yapılacak
    setDraggableItems(shuffleArray(Items));
  }, [Items]); // currentLevel.items değiştiğinde tekrar çalışır

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData("text/plain")) as Item;

    // Sürüklenebilir öğeyi listeden çıkar
    setDraggableItems((prevItems) => prevItems.filter((i) => i.id !== item.id));

    // Öğeyi, belirtilen indekste sıralı listeye ekle
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
    // Sıralı listeyi doğru sırayla ayarla
    setOrderedItems([...Items]);
  };

  const handleReplay = () => {
    setDraggableItems(Items); // Sürüklenebilir öğeleri sıfırla
    setOrderedItems(Array(Items.length).fill(null)); // Sıralı listeyi sıfırla
    setResultsChecked(false); // Sonuçları sıfırla
    setShowCorrect(false); // Doğruyu gösteri sıfırla
  };

  const isCorrectOrder = () => {
    return orderedItems.every((item, index) => item?.id === Items[index].id);
  };

  return (
    <Card className="p-6 max-w-6xl mx-auto mt-10">
      <CardContent>
        <div className="grid grid-cols-2 gap-8">
          {/* Sol Kolon: Sürüklenebilir Teori Kartları */}
          <div>
            <h2 className="text-lg font-bold mb-4">Teoriler</h2>
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

          {/* Sağ Kolon: Numaralı Drop Alanları */}
          <div>
            <h2 className="text-lg font-bold mb-4">Teorileri Sıralayın</h2>
            <div className="space-y-4">
              {orderedItems.map((item, index) => (
                <Card
                  key={index}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragOver={handleDragOver}
                  className={`p-4 flex items-start gap-4 rounded-lg ${
                    resultsChecked
                      ? item?.id === Items[index].id
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
                      <div className="text-gray-500">
                        Teoriyi buraya bırakın
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Buton */}
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
              ? "Yeniden Oyna"
              : resultsChecked
              ? "Doğruyu Göster"
              : "Sonuçları Kontrol Et"}
          </Button>
        </div>

        {/* Sonuç Mesajı */}
        {resultsChecked && !showCorrect && (
          <div className="mt-4 text-center">
            {isCorrectOrder() ? (
              <p className="text-green-600">Doğru sıralama! 🎉</p>
            ) : (
              <p className="text-red-600">
                Yanlış sıralama. Tekrar deneyin! ❌
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OrderinGame;
