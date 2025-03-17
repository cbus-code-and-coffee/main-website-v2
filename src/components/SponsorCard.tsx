interface PropsSponsor {
  image1?: string;
  image2?: string;
  image3?: string;
  imageWidth: string;
  sponsorTier: string;
  isMainTitle?: boolean;
}

const SponsorCard = (props: PropsSponsor) => {
  return (
    <>
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
            <div>
              <h4 className="text-center p-3">
                {props.sponsorTier} Roast Tier Supporters
              </h4>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              {props.image1 && (
                <img
                  className={`rounded-lg w-dark-roast ${props.imageWidth}`}
                  src={props.image1}
                />
              )}
              {props.image2 && (
                <img
                  className={`rounded-lg w-dark-roast ${props.imageWidth}`}
                  src={props.image2}
                />
              )}
              {props.image3 && (
                <img
                  className={`rounded-lg w-dark-roast ${props.imageWidth}`}
                  src={props.image3}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorCard;
