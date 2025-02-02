import Periodic from "../_components/periodic";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-background text-foreground p-4">
      <h1 className="text-2xl font-bold mb-4">Periyodik Tablo</h1>
      <Periodic />
    </main>
  );
}
