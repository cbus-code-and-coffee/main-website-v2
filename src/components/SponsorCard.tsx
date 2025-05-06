interface PropsSponsor {
  images: string[];
  imageWidth:
    | "w-dark-roast"
    | "w-medium-roast"
    | "w-light-roast"
    | "w-espresso-roast";
  sponsorTier: "Dark" | "Medium" | "Light" | "Espresso";
}

const SponsorCard: React.FC<PropsSponsor> = ({
  images,
  imageWidth,
  sponsorTier,
}) => {
  return (
    <div className="p-2">
      <h4 className="text-center p-3">{sponsorTier} Roast Tier Supporters</h4>
      <div
        className={`${images.length === 1 ? "flex justify-center" : "grid grid-cols-2 gap-4 max-w-[400px] mx-auto lg:flex justify-center"}`}
      >
        {images.map((source, index) => (
          <img
            key={index}
            className={`rounded-lg ${imageWidth}`}
            src={source}
          />
        ))}
      </div>
    </div>
  );
};

export default SponsorCard;
