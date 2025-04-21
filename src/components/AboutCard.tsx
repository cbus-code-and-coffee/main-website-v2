const AboutCard = (props: {
  title?: string;
  subTitle: string;
  pText: string;
  image: string;
  // this boolean reverses the blurb and image so that I can reuse the same component twice
  isNotReversed: boolean;
}) => {
  return (
    <>
      {props.isNotReversed ? (
        <div className="px-5">
          <h3 className="text-2xl py-10 text-center">{props.title}</h3>
          <div className="grid grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl">{props.subTitle}</h3>
              <p className="text-base py-2">{props.pText}</p>
            </div>
            <div className="p-3">
              <img className="rounded-lg" src={props.image} />
            </div>
          </div>
        </div>
      ) : (
        <div className="px-5">
          <h3 className="text-2xl py-10 text-center">{props.title}</h3>
          <div className="grid grid-cols-2 items-center">
            <div>
              <img className="rounded-lg " src={props.image} />
            </div>
            <div className="p-3">
              <h3 className="text-2xl py-2">{props.subTitle}</h3>
              <p className="text-base ">{props.pText}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutCard;
