import SponsorCard from "./SponsorCard";

const SponsorSection = () => {
  return (
    <>
      <div className="p-3">
        <div>
          <h4 className="text-2xl text-center">Sponsors</h4>
        </div>
      </div>
      <SponsorCard
        sponsorTier="Medium"
        imageWidth="w-medium-roast"
        images={["https://dummyimage.com/600x400/eeeeee/fff"]}
      />
      <SponsorCard
        sponsorTier="Light"
        imageWidth="w-light-roast"
        images={[
          "https://dummyimage.com/600x400/eeeeee/fff",
          "https://dummyimage.com/600x400/eeeeee/fff",
          "https://dummyimage.com/600x400/eeeeee/fff",
          "https://dummyimage.com/600x400/eeeeee/fff",
        ]}
      />
    </>
  );
};

export default SponsorSection;
