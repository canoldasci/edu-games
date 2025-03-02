interface LiquidContentProps {
  fluidity: number; // Sıvı seviyesi (0 ile 1 arasında)
  fluidColor: string; // Sıvı rengi (örneğin: "#3b82f6")
  randomPositions?: { bottom: number; left: number; animation: string }[]; // Moleküllerin pozisyonları
  vaporPressure?: number; // Buhar basıncı
  particleColor?: string;
  particleWidth?: string;
  particleHeight?: string;
}

const FluidCard: React.FC<LiquidContentProps> = ({
  fluidity,
  fluidColor,
  randomPositions,
  vaporPressure,
  particleWidth = "10px",
  particleHeight = "10px",
  particleColor = "white", // Varsayılan beyaz
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
            className={`absolute w-4 h-4 rounded-full opacity-70`}
            style={{
              width: particleWidth,
              height: particleHeight,
              bottom: `${pos.bottom}%`,
              left: `${pos.left}%`,
              animation: pos.animation,
              backgroundColor: particleColor, // Molekül rengi
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
