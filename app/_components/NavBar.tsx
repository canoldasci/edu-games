"use client";
import { Button } from "@/components/ui/button";
export default function Navbar() {
  return (
    <nav className="">
      <div className="container mx-auto p-3">
        <Button
          variant="outline"
          onClick={() => window.location.reload()}
          className="text-lg f"
        >
          Geri Dön
        </Button>
      </div>
    </nav>
  );
}
