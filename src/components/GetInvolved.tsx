import SectionCard from "./SectionCard";

const GetInvolved = () => {
  return (
    <div className="p-5 bg-gray-100">
      <h3 className="text-2xl text-center p-7 font-bold"> Get Involved</h3>
      <div className="flex gap-4 ">
        <SectionCard
          image="https://dummyimage.com/600x400/eeeeee/fff"
          imageStyle="rounded-mid h-48"
          title="Sign Up to Be a Presenter"
          blurb="Lorem ipsum demo demoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          isButton={true}
          btnTitle="Learn more"
          buttonStyle="rounded-full py-1 px-12 h-12 border-2 border-blue-700 text-blue-700 bg-transparent font-semibold hover:border-3 hover:font-bold"
        />
        <SectionCard
          image="https://dummyimage.com/600x400/eeeeee/fff"
          imageStyle="rounded-mid h-48"
          title="Volunteer Your Time"
          blurb="Lorem ipsum demo demoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          isButton={true}
          btnTitle="Learn more"
          buttonStyle="rounded-full py-1 px-12 h-12 border-2 border-blue-700 text-blue-700 bg-transparent font-semibold hover:border-3 hover:font-bold"
        />
        <SectionCard
          image="https://dummyimage.com/600x400/eeeeee/fff"
          imageStyle="rounded-mid h-48"
          title="Become a Sponsor"
          blurb="Lorem ipsum demo demoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          isButton={true}
          btnTitle="Learn more"
          buttonStyle="rounded-full py-1 px-12 h-12 border-2 border-blue-700 text-blue-700 bg-transparent font-semibold hover:border-3 hover:font-bold"
        />
      </div>
    </div>
  );
};

export default GetInvolved;
