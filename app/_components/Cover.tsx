"use client";
import { useState } from "react";
import DescriptionCard from "./DescriptionCard";
import { Button } from "@/components/ui/button";

interface CoverProps {
  title: string;
  content?: string;
  handleShow: (show: boolean) => void;
}

const Cover = ({ title, content, handleShow }: CoverProps) => {
  const [show, setShow] = useState<boolean>(true);

  const handleButtonClick = () => {
    setShow(false);
    handleShow(false); // `show`'u üst bileşene bildiriyoruz
  };
  return (
    <>
      {show ? (
        <div className="mt-20 flex flex-col gap-5 items-center">
          <DescriptionCard title={title} content={content} />
          <Button size="lg" className="w-1/3" onClick={handleButtonClick}>
            Başla
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default Cover;
