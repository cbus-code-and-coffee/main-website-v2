import SectionCard from "./SectionCard";

import { useState } from "react";

const WhatToExpect = () => {
  const [index, setIndex] = useState(0);

  const cards = [
    {
      id: 1,
      image: "https://dummyimage.com/600x400/eeeeee/fff",
      title: "1) Bring a laptop",
      blurb:
        "All you need is a laptop. We are VERY newbie-friendly, social, and look forward to developers interested in meeting more developers. We provide a cozy seat, wifi, and cool people to meet! In the future we plan on hosting: job fairs, HHs, and hackathons.",
    },
    {
      id: 2,
      image: "https://dummyimage.com/600x400/eeeeee/fff",
      title: "2) Intro Circle",
      blurb:
        "At 1:30 pm, we form a circle to: state our names, mention programming languages/ frameworks you can help with, and what you need help on. Immediately after we have an optional circle for jobs hiring or people looking for a job.",
    },
    {
      id: 3,
      image: "https://dummyimage.com/600x400/eeeeee/fff",
      title: "3) Code and Coffee",
      blurb:
        "Break, grab some coffee, help a fellow with a side project, or ask about the new JS library she just mentioned. It's up to you! Code and Coffee partners with organizers that empower community. Our organizers actively reflect on learning from DC Code and Coffee.",
    },
  ];

  const setPrevious = () =>
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));

  const setNext = () =>
    setIndex((next) => (next === cards.length - 1 ? 0 : next + 1));
  return (
    <div className="p-5">
      <h3 className="text-2xl text-center p-7 font-bold"> What To Expect</h3>
      <div className="flex gap-4 md:hidden">
        <button className="align-middle border-none" onClick={setPrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1f1f1f"
          >
            <path d="M560-280 360-480l200-200v400Z" />
          </svg>
        </button>
        <SectionCard
          image={cards[index].image}
          imgWrapperStyle="flex justify-center p-6"
          imageStyle="rounded-full h-24 w-24 justify-items: center"
          title={cards[index].title}
          blurb={cards[index].blurb}
          isButton={false}
        />
        <button className="align-middle border-none" onClick={setNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1f1f1f"
          >
            <path d="M400-280v-400l200 200-200 200Z" />
          </svg>
        </button>
      </div>

      <div className="p-5">
        <div className="hidden md:flex gap-4 ">
          {cards.map((card) => (
            <SectionCard
              key={card.id}
              image={card.image}
              imgWrapperStyle="flex justify-center p-6"
              imageStyle="rounded-full h-24 w-24 justify-items: center"
              title={card.title}
              blurb={card.blurb}
              isButton={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatToExpect;
