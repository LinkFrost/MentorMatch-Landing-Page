/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Feedback() {
  return (
    <div className="z-1 bg-mmLightYellow drop-shadow-xl mb-5 w-screen flex flex-col justify-center items-center px-8 py-8">
      <h1 className="font-bold text-4xl text-mmDarkBlue mb-6">Interested in MentorMatch? Let us know!</h1>

      <p className="text-xl text-mmDarkBlue max-w-4xl">If you are interested in MentorMatch, or have any other feedback to share on the idea, try out our prototype, and please fill out the form below!</p>
    </div>
  );
}
