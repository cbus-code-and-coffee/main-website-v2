import SponsorCard from "./SponsorCard";

const SponsorSection = () => {
  return (
    <>
      <SponsorCard
        isMainTitle={true}
        sponsorTier="medium"
        imageWidth="w-medium-roast"
        images={["https://dummyimage.com/600x400/eeeeee/fff"]}
      />
      <SponsorCard
        isMainTitle={false}
        sponsorTier="Light"
        imageWidth="w-light-roast"
        images={[
          "https://dummyimage.com/600x400/eeeeee/fff",
          "https://dummyimage.com/600x400/eeeeee/fff",
          "https://dummyimage.com/600x400/eeeeee/fff",
        ]}
      />
    </>
  );
};

export default SponsorSection;
