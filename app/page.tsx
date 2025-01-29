export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full flex flex-col items-center justify-center relative main-card">
        <div className="flex flex-col gap-6 mt-8">
          <a
            href="https://edu-games-three.vercel.app/atomTeorileri"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg transform hover:scale-105 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 ease-in-out"
          >
            Atom Teorileri
          </a>
          <a
            href="https://edu-games-three.vercel.app/bilesik"
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold text-lg rounded-lg shadow-lg transform hover:scale-105 hover:from-green-700 hover:to-teal-600 transition-all duration-300 ease-in-out"
          >
            Bileşik
          </a>
          <a
            href="https://edu-games-three.vercel.app/elektron"
            className="px-6 py-3 bg-gradient-to-r from-pink-600 to-red-500 text-white font-semibold text-lg rounded-lg shadow-lg transform hover:scale-105 hover:from-pink-700 hover:to-red-600 transition-all duration-300 ease-in-out"
          >
            Elektron
          </a>
          <a
            href="https://edu-games-three.vercel.app/iyon"
            className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-500 text-white font-semibold text-lg rounded-lg shadow-lg transform hover:scale-105 hover:from-yellow-700 hover:to-orange-600 transition-all duration-300 ease-in-out"
          >
            İyon
          </a>
          <a
            href="https://edu-games-three.vercel.app/orbitaller"
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-semibold text-lg rounded-lg shadow-lg transform hover:scale-105 hover:from-indigo-700 hover:to-purple-600 transition-all duration-300 ease-in-out"
          >
            Orbitaller
          </a>
          <a
            href="https://edu-games-three.vercel.app/piktogram"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg rounded-lg shadow-lg transform hover:scale-105 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 ease-in-out"
          >
            Piktogram
          </a>
          <a
            href="https://edu-games-three.vercel.app/periyodikTablo"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg rounded-lg shadow-lg transform hover:scale-105 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 ease-in-out"
          >
            Periyodik Tablo (hazırlanıyor...)
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"></footer>
    </>
  );
}
