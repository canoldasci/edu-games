import Periodic from "../_components/periodic";

export default function Home() {
  return (
    <main className="flex flex-col mx-4 items-center min-h-screen bg-background text-foreground p-4">
      <h1 className="text-5xl font-bold mb-4 text-slate-900">
        Periyodik Tablo
      </h1>
      <Periodic />
    </main>
  );
}
