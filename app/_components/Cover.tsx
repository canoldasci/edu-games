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
        <>
          <DescriptionCard title={title} content={content} />
          <Button size="lg" onClick={handleButtonClick}>
            Başla
          </Button>
        </>
      ) : null}
    </>
  );
};

export default Cover;
