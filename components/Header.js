import People from "../public/People";

export default function Header() {
  return (
    <div className="relative bg-white drop-shadow-xl w-screen flex flex-col justify-center items-center px-8 py-8">
      <div>
        <div className="flex mb-0">
          <People className="text-center drop-shadow-xl" width={150} height={125} fill={"#F8D580"}></People>
          <h1 className="font-bold text-8xl text-mmDarkBlue ">MentorMatch</h1>
        </div>
        <h2 className="float-right text-xl text-mmDarkBlue mb-5">by Curio</h2>
      </div>

      <h2 className="text-2xl text-mmDarkBlue">Mentorship at your fingertips!</h2>
    </div>
  );
}
