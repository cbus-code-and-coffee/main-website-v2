interface PropsSponsor {
  images: string[];
  imageWidth: string;
  sponsorTier: string;
  isMainTitle?: boolean;
}

const SponsorCard = (props: PropsSponsor) => {
  return (
    <div>
      {props.isMainTitle && (
        <div className="p-3">
          <div className="text-2xl text-center">
            <h4>Sponsors</h4>
          </div>
        </div>
      )}

      <div className="p-2">
        <div>
          <h4 className="text-center p-3">
            {props.sponsorTier} Roast Tier Supporters
          </h4>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          {props.images.map((source, index) => (
            <img
              key={index}
              className={`rounded-lg ${props.imageWidth}`}
              src={source}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorCard;
