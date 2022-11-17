/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Features() {
  return (
    <div className="bg-mmLightYellow drop-shadow-xl w-screen flex flex-col justify-center items-center py-8">
      <h1 className="font-bold text-4xl text-mmDarkBlue mb-6">Features</h1>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-20 2xl:gap-x-28 mb-5">
        <div style={{ width: "15rem" }}>
          <img className="drop-shadow-lg mb-2" alt="mentor selection part 1" style={{ height: "auto", width: "15rem" }} src={"/img/mvp_images/Mentor_selection_part_3.png"}></img>
          <p className="drop-shadow-lg text-xl text-mmDarkBlue max-w-4xl mb-2">
            <span className="font-semibold">Find a mentor</span> based on your area of interest
          </p>
        </div>
        <div style={{ width: "15rem" }}>
          <img className="drop-shadow-lg mb-2" alt="mentor selection part 1 mb-2" style={{ height: "auto", width: "15rem" }} src={"/img/mvp_images/Mentor_selection_part_4.png"}></img>
          <p className="drop-shadow-lg text-xl text-mmDarkBlue max-w-4xl mb-2">
            <span className="font-semibold">Recommendation system</span> for matching with mentors
          </p>
        </div>
        <div style={{ width: "15rem" }}>
          <img className="drop-shadow-lg mb-2" alt="mentor selection part 1" style={{ height: "auto", width: "15rem" }} src={"/img/mvp_images/Mentor_Chat_View.png"}></img>
          <p className="drop-shadow-lg text-xl text-mmDarkBlue max-w-4xl">
            <span className="font-semibold">Video and chat communication</span> with your mentor
          </p>
          <span className="text-md text-gray-500 mb-2">*text based chat exclusive to Premium Tier</span>
        </div>
        <div style={{ width: "15rem" }}>
          <img className="drop-shadow-lg mb-2" alt="mentor selection part 1" style={{ height: "auto", width: "15rem" }} src={"/img/mvp_images/Mentor_Signup.png"}></img>
          <p className="drop-shadow-lg text-xl text-mmDarkBlue max-w-4xl mb-2">
            <span className="font-semibold">Apply</span> to be a mentor
          </p>
        </div>
      </div>
      <div>
        <div className="mb-4">
          <p className="drop-shadow-lg text-xl text-mmDarkBlue max-w-4xl mb-2">
            View <span className="font-semibold">premium content</span> from all sorts of mentors, including video classes and more
          </p>
          <span className="text-md text-gray-500 mb-2">*premium content exclusive to Premium Tier</span>
        </div>
        <div>
          <p className="drop-shadow-lg text-xl text-mmDarkBlue max-w-4xl mb-2">
            <span className="font-semibold">Review</span> system to use after mentorship sessions are complete
          </p>
        </div>
      </div>
    </div>
  );
}
