"use client";
import { useState } from "react";
import Cover from "../_components/Cover";
import { kazanimlar } from "../../constants/kazanim";
import Electron from "./_components/Electron";
const Page = () => {
  const [showCover, setShowCover] = useState<boolean>(true);
  const title = "KİM.9.1.5";
  const description = kazanimlar[title];
  const handleShow = (show: boolean) => {
    setShowCover(show);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6 text-2xl">
      <Cover title={title} content={description} handleShow={handleShow} />
      {!showCover && <Electron />}
    </div>
  );
};

export default Page;
