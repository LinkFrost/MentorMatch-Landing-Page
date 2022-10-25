/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Features() {
  return (
    <div className="z-1 bg-mmLightYellow drop-shadow-xl w-screen flex flex-col justify-center items-center px-8 py-8">
      <h1 className="font-bold text-4xl text-mmDarkBlue mb-6">Features</h1>

      <div className="max-w-6xl grid grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        <p className="drop-shadow-lg text-xl text-mmDarkBlue max-w-4xl mb-2">
          <span className="font-semibold">Find a mentor</span> based on your area of interest
        </p>
        <p className="drop-shadow-lg text-xl text-mmDarkBlue max-w-4xl mb-2">
          <span className="font-semibold">Custom recommendation system</span> for matching with mentors
        </p>
        <p className="drop-shadow-lg text-xl text-mmDarkBlue max-w-4xl mb-2">
          <span className="font-semibold">Chat based communication</span> with your mentor
        </p>
        <p className="drop-shadow-lg text-xl text-mmDarkBlue max-w-4xl mb-2">
          Want to become a mentor? <span className="font-semibold">You can apply for that</span>
        </p>
        <p className="drop-shadow-lg text-xl text-mmDarkBlue max-w-4xl mb-2">
          View a <span className="font-semibold">mentor's profile</span>
        </p>
        <p className="drop-shadow-lg text-xl text-mmDarkBlue max-w-4xl mb-2">
          <span className="font-semibold">Review</span> system to use after mentorship is complete
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-28 justify-between mb-5">
        <img className="drop-shadow-lg" alt="mentor selection part 1" style={{ height: "auto", width: "15rem" }} src={"/img/mvp_images/Mentor_selection_part_3.png"}></img>

        <img className="drop-shadow-lg" alt="mentor selection part 1" style={{ height: "auto", width: "15rem" }} src={"/img/mvp_images/Mentor_selection_part_4.png"}></img>

        <img className="drop-shadow-lg" alt="mentor selection part 1" style={{ height: "auto", width: "15rem" }} src={"/img/mvp_images/Mentor_Chat_View.png"}></img>

        <img className="drop-shadow-lg" alt="mentor selection part 1" style={{ height: "auto", width: "15rem" }} src={"/img/mvp_images/Mentor_Signup.png"}></img>
      </div>
    </div>
  );
}
