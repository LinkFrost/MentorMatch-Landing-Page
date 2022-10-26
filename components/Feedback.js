/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export default function Feedback() {
  return (
    <div className="bg-mmLightYellow drop-shadow-xl mb-5 w-screen flex flex-col justify-center items-center px-8 py-8">
      <h1 className="font-bold text-4xl text-mmDarkBlue mb-6">Interested in MentorMatch? Let us know!</h1>

      <p className="text-lg text-mmDarkBlue max-w-4xl mb-3">If you are interested in MentorMatch, or have any other feedback to share on the idea, try out our prototype, and please fill out the form below!</p>

      <p className="text-lg text-mmDarkBlue max-w-4xl mb-3">We also have an interactive prototype with some app-specific questions:</p>

      <a target="_blank" rel="noopener noreferrer" href="https://t.maze.co/121734133">
        <button className="aspect-auto rounded-xl bg-mmDarkYellow p-4 text-lg font-semibold hover:drop-shadow-xl hover:shadow-black">Test Prototype</button>
      </a>

      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf-wP3U0y4Tb1ySNndRonGlehu_EJL2BBOZIe1uq7ZGBUyhKQ/viewform?embedded=true" width="1100" height="1670" frameborder="0" marginheight="0" marginwidth="0">
        Loading…
      </iframe>
    </div>
  );
}
