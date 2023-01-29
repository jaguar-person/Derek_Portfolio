import { FC } from "react";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <img
        data-scroll
        data-scroll-speed="2"
        className="w-[225px] h-[225px] rounded-full"
        src="/avatar.jpg"
        alt=""
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          Who am I?
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
          <p>My name is Derek.</p>
          I am 27 years old, Full Stack Web Developer who likes coding and football.
          As far as now, developed elegant and remarkable projects using various Stacks such as MERN, MEAN, Laravel, Django, NextJS.
          My personality is <span>Creative</span> and <span>Active</span>.
          I like challenging myself with new skills so that I maintain up-to-date...
        </p>
      </div>
    </div>
  );
};

export default Who;
