"use client";
import { useState } from "react";
import Cover from "../_components/Cover";
import { kazanimlar } from "../../constants/kazanim";
import Playground from "./_components/Playground";
const Page = () => {
  const [showCover, setShowCover] = useState<boolean>(true);
  const title = "KİM.9.3.1";
  const description = kazanimlar[title];
  const handleShow = (show: boolean) => {
    setShowCover(show);
  };
  return (
    <div className="flex flex-col items-center justify-start p-6 gap-1">
      <Cover title={title} content={description} handleShow={handleShow} />
      {!showCover && <Playground />}
    </div>
  );
};

export default Page;
