"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import DragBox from "./DragBox";
import TargetBox from "./TargetBox";
import { Button } from "@/components/ui/button"; // Shadcn Button bileşeni
import { Card, CardContent } from "@/components/ui/card"; // Shadcn Card bileşeni
import { Level, Item, Target } from "../../types/index";
import { shuffleArray } from "../../utils"; // shuffleArray fonksiyonu

interface DragDropGamePageProps {
  levels: Level[];
  handleOrderingType?: (type: string) => void;
}

const DragDropGame = ({
  levels,
  handleOrderingType,
}: DragDropGamePageProps) => {
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
  const [isOrdering, setIsOrdering] = useState<boolean | null>(null);

  const handleLevel = (level: Level) => {
    setCurrentLevel({ ...level });
    // setDraggableItems(level.items);
    setTargetStates(
      level.targets.map((target: Target) => ({ target, item: null }))
    );
    setTimeLeft(level.timeLimit);
  };

  useEffect(() => {
    const firstLevel = levels[0];
    if (firstLevel?.orderingType) {
      setIsOrdering(true); // Eğer tanımlıysa çağır
      handleOrderingType?.(firstLevel.orderingType);
    }
  }, []);

  useEffect(() => {
    const currentLevelItems = shuffleArray([...currentLevel.items]);
    setDraggableItems(currentLevelItems);
    console.log("currentLevelItems", currentLevelItems);
    if (isOrdering && currentLevel?.orderingType) {
      handleOrderingType?.(currentLevel.orderingType);
    }
  }, [currentLevel]); // currentLevel değiştiğinde tekrar çalışır

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
      handleLevel(nextLevel);
      setResultsChecked(false);
      setShowCorrect(false);
      setGameOver(false);
    } else {
      setGameOver(true);
    }
  };

  const handleReplay = () => {
    if (timeLeft !== 0) {
      handleLevel(levels[0]);
    } else {
      handleLevel(currentLevel);
    }
    setResultsChecked(false);
    setShowCorrect(false);
    setGameOver(false);
  };

  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <CardContent>
        {/* Seviye, Zamanlayıcı ve Puan */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-bold">Seviye {currentLevel.level}</div>
          <div className="text-lg font-bold">
            Kalan Süre: {timeLeft !== null ? `${timeLeft}s` : "Yükleniyor..."}
          </div>
          <div className="text-lg font-bold">Puan: {score}</div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-4">
          {/* Sürüklenebilir Öğeler */}
          <div
            className={cn(
              "flex gap-4 flex-col justify-start items-center",
              !isOrdering ? "flex-wrap" : "flex-col"
            )}
          >
            {draggableItems.map((item) => (
              <DragBox
                key={item.id}
                item={item}
                handleDragStart={handleDragStart}
              />
            ))}
          </div>

          {/* Hedef Kutuları */}
          <div
            className={cn(
              "flex gap-4 justify-between items-center",
              !isOrdering ? "flex-wrap" : "flex-col min-w-8"
            )}
          >
            {targetStates.map((state, index) => (
              <TargetBox
                key={state.target.id}
                handleDrop={handleDrop}
                handleDragOver={handleDragOver}
                state={state}
                resultsChecked={resultsChecked}
                index={index}
              />
            ))}
          </div>
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
            ? levels.find((level) => level.level === currentLevel.level + 1)
              ? "Sonraki Seviye"
              : "Oyunu Bitir"
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
