"use client";
import { Button } from "@/components/ui/button";
export default function Navbar() {
  return (
    <nav className="">
      <div className="container mx-auto p-3">
        <Button
          variant="link"
          onClick={() => window.location.reload()}
          className="text-lg text-black font-bold"
        >
          Geri Dön
        </Button>
      </div>
    </nav>
  );
}
