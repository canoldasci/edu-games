"use client";
import { useState } from "react";
import Cover from "../_components/Cover";
import { kazanimlar } from "../../constants/kazanim";
import Polar from "./_components/Polar";
const Page = () => {
  const [showCover, setShowCover] = useState<boolean>(true);
  const title = "KİM.9.2.5";
  const description = kazanimlar[title];
  const handleShow = (show: boolean) => {
    setShowCover(show);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 gap-1">
      <Cover title={title} content={description} handleShow={handleShow} />
      {!showCover && <Polar />}
    </div>
  );
};

export default Page;
