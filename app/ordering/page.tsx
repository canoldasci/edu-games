import OrderingGame from "./_components/OrderingGame";
export default function Home() {
  return (
    <>
      <main className="min-h-screen  w-full flex flex-column items-center justify-center relative main-card">
        <OrderingGame />
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"></footer>
    </>
  );
}
