import SectionCard from "./SectionCard";

import { useState } from "react";

const GetInvolved = () => {
  const [index, setIndex] = useState(0);

  const cards = [
    {
      id: 1,
      image: "https://dummyimage.com/600x400/eeeeee/fff",
      title: "Sign Up to Be a Presenter",
      blurb:
        "Lorem ipsum demo demoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      image: "https://dummyimage.com/600x400/eeeeee/fff",
      title: "Volunteer Your Time",
      blurb:
        "Lorem ipsum demo demoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      image: "https://dummyimage.com/600x400/eeeeee/fff",
      title: "Become a Sponsor",
      blurb:
        "Lorem ipsum demo demoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const setPrevious = () =>
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));

  const setNext = () =>
    setIndex((next) => (next === cards.length - 1 ? 0 : next + 1));

  return (
    <div id="get-involved" className="p-5 bg-gray-100">
      <h3 className="text-2xl text-center p-7 font-bold "> Get Involved</h3>
      <div className="flex gap-4 md:hidden">
        <button className="border-none p-0" onClick={setPrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="42px"
            viewBox="0 -960 960 960"
            width="42px"
            fill="#1f1f1f"
          >
            <path d="M560-280 360-480l200-200v400Z" />
          </svg>
        </button>
        <SectionCard
          image={cards[index].image}
          imgWrapperStyle="flex justify-center p-2"
          imageStyle="rounded-xl w-68"
          title={cards[index].title}
          blurb={cards[index].blurb}
          isButton={true}
          btnTitle="Learn more"
          btnStyle="rounded-full py-1 px-12 h-12 border-2 border-btn-blue text-btn-blue bg-transparent font-semibold hover:border-3 hover:font-bold"
        />
        <button className="border-none p-0" onClick={setNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="42px"
            viewBox="0 -960 960 960"
            width="42px"
            fill="#1f1f1f"
          >
            <path d="M400-280v-400l200 200-200 200Z" />
          </svg>
        </button>
      </div>

      <div id="get-involved" className="p-5 bg-gray-100">
        <div className="hidden md:flex gap-4">
          {cards.map((card) => (
            <SectionCard
              key={card.id}
              image={card.image}
              imgWrapperStyle="flex justify-center p-2"
              imageStyle="rounded-xl w-68"
              title="Volunteer Your Time"
              blurb={card.blurb}
              isButton={true}
              btnTitle="Learn more"
              btnStyle="rounded-full py-1 px-12 h-12 border-2 border-btn-blue text-btn-blue bg-transparent font-semibold hover:border-3 hover:font-bold"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
