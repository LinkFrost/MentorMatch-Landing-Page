/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Features() {
  return (
    <div className="z-1 bg-mmLightYellow drop-shadow-xl mb-5 w-screen flex flex-col justify-center items-center px-8 py-8">
      <h1 className="font-bold text-4xl text-mmDarkBlue mb-6">Features</h1>
      <div className="grid grid-flow-col grid-cols-3 gap-12 justify-between">
        <img alt="mentor selection part 1" style={{ height: "600px", width: "auto" }} src={"/img/mvp_images/Mentor_selection_part_3.png"}></img>
        <img alt="mentor selection part 1" style={{ height: "600px", width: "auto" }} src={"/img/mvp_images/Mentor_selection_part_4.png"}></img>
        <img alt="mentor selection part 1" style={{ height: "600px", width: "auto" }} src={"/img/mvp_images/Mentor_Chat_View.png"}></img>
      </div>
    </div>
  );
}
