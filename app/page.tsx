import React from "react";
import Link from "next/link"; // Next.js'in Link bileşenini import edin
import { Button } from "@/components/ui/button"; // Shadcn Button bileşenini import edin

const PageButtons = () => {
  // Sayfa numaralarını içeren dizi
  const pages = [
    "9.1.1",
    "9.1.2",
    "9.1.3",
    "9.1.4.a",
    "9.1.4.b",
    "9.1.5",
    "9.1.6.a",
    "9.1.6.b",
    "9.1.7",
    "9.1.8.a",
    "9.1.8.b",
    "9.2.2",
    "9.2.4",
    "9.2.5",
    "9.2.6",
    "9.2.9",
    "9.2.10",
    "9.2.11",
    "9.2.12",
    "9.3.1",
  ];

  return (
    <main className="flex flex-wrap justify-center items-center gap-2 container mt-64">
      {pages.map((page, index) => (
        <Button key={index} size="lg" className="font-bold" asChild>
          <Link href={`/${page}`}>{page}</Link>
        </Button>
      ))}
    </main>
  );
};

export default PageButtons;
