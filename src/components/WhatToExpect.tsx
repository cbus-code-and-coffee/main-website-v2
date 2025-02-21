import SectionCard from "./SectionCard";

const WhatToExpect = () => {
  return (
    <div className="p-5">
      <h3 className="text-2xl text-center p-7 font-bold"> What To Expect</h3>
      <div className="flex gap-4 ">
        <SectionCard
          image="https://dummyimage.com/600x400/eeeeee/fff"
          borderStyle="flex justify-center p-6"
          imageStyle="rounded-full h-24 w-24 justify-items: center"
          title="1) Bring a laptop"
          blurb="All you need is a laptop. We are VERY newbie-friendly, social, and look forward to developers interested in meeting more developers. We provide a cozy seat, wifi, and cool people to meet! In the future we plan on hosting: job fairs, HHs, and hackathons."
          isButton={false}
        />
        <SectionCard
          image="https://dummyimage.com/600x400/eeeeee/fff"
          borderStyle="flex justify-center p-6"
          imageStyle="rounded-full h-24 w-24"
          title="2) Intro Circle"
          blurb="At 1:30 pm, we form a circle to: state our names, mention programming languages/ frameworks you can help with, and what you need help on. Immediately after we have an optional circle for jobs hiring or people looking for a job."
          isButton={false}
        />
        <SectionCard
          image="https://dummyimage.com/600x400/eeeeee/fff"
          borderStyle="flex justify-center p-6"
          imageStyle="rounded-full h-24 w-24"
          title="3) Code and Coffee"
          blurb="Break, grab some coffee, help a fellow with a side project, or ask about the new JS library she just mentioned. It's up to you! Code and Coffee partners with organizers that empower community. Our organizers actively reflect on learning from DC Code and Coffee."
          isButton={false}
        />
      </div>
    </div>
  );
};

export default WhatToExpect;
