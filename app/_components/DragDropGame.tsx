"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Shadcn Button bileşeni
import { Card, CardContent } from "@/components/ui/card"; // Shadcn Card bileşeni
import { Level, Item, Target } from "../../types/index";
import { shuffleArray } from "../../utils"; // shuffleArray fonksiyonu
import Image from "next/image"; // Resim için Image bileşeni

interface DragDropGamePageProps {
  levels: Level[];
}

const DragDropGame = ({ levels }: DragDropGamePageProps) => {
  const [currentLevel, setCurrentLevel] = useState<Level>(
    levels?.[0] || { level: 1, items: [], targets: [], timeLimit: 40 }
  ); // İlk seviye
  const [draggableItems, setDraggableItems] = useState<Item[]>([]); // Başlangıçta boş array
  const [targetStates, setTargetStates] = useState<
    { target: Target; item: Item | null }[]
  >(currentLevel?.targets.map((target) => ({ target, item: null })));
  const [resultsChecked, setResultsChecked] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(currentLevel.timeLimit);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    // Sadece istemci tarafında sıralama işlemi yapılacak
    setDraggableItems(shuffleArray(currentLevel.items));
  }, [currentLevel.items]); // currentLevel.items değiştiğinde tekrar çalışır

  useEffect(() => {
    if (timeLeft > 0 && !resultsChecked && !gameOver) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, resultsChecked, gameOver]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: Item) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(item));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData("text/plain")) as Item;

    // Hedef kutusunda zaten bir öğe varsa, eski öğeyi kaldır
    const existingItem = targetStates[index].item;
    if (existingItem) {
      setDraggableItems((prevItems) => [...prevItems, existingItem]); // Eski öğeyi tekrar sürüklenebilir öğelere ekle
    }

    // Öğeyi hedef kutusuna ekle
    const newTargetStates = [...targetStates];
    newTargetStates[index].item = item;
    setTargetStates(newTargetStates);

    // Sürüklenebilir öğe listesinden yeni öğeyi çıkar
    setDraggableItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const checkResults = () => {
    setResultsChecked(true);
    const correctMatches = targetStates.filter(
      (state) => state.item?.id === state.target.correctItemId
    ).length;

    // Doğru eşleşmeler için puan ver
    const matchPoints = correctMatches * 10;
    setScore((prev) => prev + matchPoints);

    // Zaman bonusu puanı
    // const timeBonus = timeLeft;
    // setScore((prev) => prev + timeBonus);

    // Bölüm tamamlama bonusu (50 puan)
    if (correctMatches === currentLevel.targets.length) {
      setScore((prev) => prev + 50);
    }
  };

  const handleShowCorrect = () => {
    setShowCorrect(true);
    // Hedefleri doğru öğelerle ayarla
    const newTargetStates = targetStates.map((state) => ({
      ...state,
      item:
        currentLevel.items.find(
          (item) => item.id === state.target.correctItemId
        ) || null,
    }));
    setTargetStates(newTargetStates);
  };

  const handleNextLevel = () => {
    const nextLevel = levels.find(
      (level) => level.level === currentLevel.level + 1
    );
    if (nextLevel) {
      setCurrentLevel(nextLevel);
      setDraggableItems(nextLevel.items);
      setTargetStates(
        nextLevel.targets.map((target) => ({ target, item: null }))
      );
      setTimeLeft(nextLevel.timeLimit);
      setResultsChecked(false);
      setShowCorrect(false);
      setGameOver(false);
    } else {
      setGameOver(true);
    }
  };

  const handleReplay = () => {
    if (timeLeft !== 0) {
      setCurrentLevel(levels[0]);
      setDraggableItems(levels[0].items);
      setTargetStates(
        levels[0].targets.map((target) => ({ target, item: null }))
      );
      setTimeLeft(levels[0].timeLimit);
    } else {
      setDraggableItems(currentLevel.items);
      setTargetStates(
        currentLevel.targets.map((target) => ({ target, item: null }))
      );
      setTimeLeft(currentLevel.timeLimit);
    }
    setResultsChecked(false);
    setShowCorrect(false);
    setGameOver(false);
  };

  return (
    <Card className="p-6 max-w-4xl mx-auto mt-10">
      <CardContent>
        {/* Seviye, Zamanlayıcı ve Puan */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-bold">Seviye {currentLevel.level}</div>
          <div className="text-lg font-bold">
            Kalan Süre: {timeLeft !== null ? `${timeLeft}s` : "Yükleniyor..."}
          </div>
          <div className="text-lg font-bold">Puan: {score}</div>
        </div>

        {/* Sürüklenebilir Öğeler */}
        <div className="flex flex-wrap gap-4 mb-6">
          {draggableItems.map((item) => (
            <Card
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              className="p-4 bg-blue-100 rounded-lg cursor-move hover:bg-blue-200 transition-colors"
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="max-w-full h-auto"
                />
              ) : (
                item.name
              )}
            </Card>
          ))}
        </div>

        {/* Hedef Kutuları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {targetStates.map((state, index) => (
            <Card
              key={state.target.id}
              onDrop={(e) => handleDrop(e, index)}
              onDragOver={handleDragOver}
              className={`p-4 h-20 flex items-center justify-center rounded-lg ${
                resultsChecked
                  ? state.item?.id === state.target.correctItemId
                    ? "bg-green-200"
                    : "bg-red-200"
                  : "bg-gray-200"
              }`}
            >
              <div className="text-sm font-medium text-gray-600">
                {state.target.name}
              </div>
              <div className="text-lg font-bold">
                {state.item?.image ? (
                  <Image
                    src={state.item.image}
                    alt={state.item.name}
                    width={50}
                    height={50}
                    className="max-w-full h-auto"
                  />
                ) : (
                  state.item?.name
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Buton */}
        <Button
          onClick={
            showCorrect
              ? handleNextLevel
              : resultsChecked
              ? handleShowCorrect
              : checkResults
          }
          className="w-full"
          disabled={gameOver}
        >
          {showCorrect
            ? "Sonraki Seviye"
            : resultsChecked
            ? "Doğruları Göster"
            : "Sonuçları Kontrol Et"}
        </Button>

        {/* Oyun Bitti Mesajı */}
        {gameOver && (
          <div className="mt-4 text-center">
            {timeLeft === 0 ? (
              <>
                <p className="text-red-600">Süre doldu! Oyun bitti. 😢</p>
                <Button onClick={handleReplay} className="mt-4">
                  Seviyeyi Tekrar Oyna
                </Button>
              </>
            ) : (
              <>
                <p className="text-red-600">
                  Tebrikler! Tüm seviyeleri tamamladınız! 🎉
                </p>
                <Button onClick={handleReplay} className="mt-4">
                  Oyunu Tekrar Oyna
                </Button>
              </>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DragDropGame;
