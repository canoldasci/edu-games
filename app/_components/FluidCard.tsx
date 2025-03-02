import React from "react";

interface LiquidContentProps {
  fluidity: number; // Sıvı seviyesi (0 ile 1 arasında)
  fluidColor: string; // Sıvı rengi (örneğin: "#3b82f6")
  randomPositions?: { bottom: number; left: number; animation: string }[]; // Moleküllerin pozisyonları
  vaporPressure?: number; // Buhar basıncı
}

const FluidCard: React.FC<LiquidContentProps> = ({
  fluidity,
  fluidColor,
  randomPositions,
  vaporPressure,
}) => {
  return (
    <div
      className="absolute bottom-0 left-0 w-full transition-all duration-500 overflow-hidden"
      style={{
        height: `${fluidity * 100}%`,
        backgroundColor: fluidColor,
      }}
    >
      {/* Moleküller */}
      {randomPositions &&
        randomPositions.map((pos, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-white rounded-full opacity-70"
            style={{
              bottom: `${pos.bottom}%`,
              left: `${pos.left}%`,
              animation: pos.animation,
            }}
          ></div>
        ))}
      {/* Buhar Basıncı Göstergesi */}
      {vaporPressure && (
        <div className="absolute top-2 left-2 text-sm font-medium">
          Buhar Basıncı: {vaporPressure.toFixed(2)} mmHg
        </div>
      )}
    </div>
  );
};
export default FluidCard;
