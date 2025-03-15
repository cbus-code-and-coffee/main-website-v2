interface PropsSponsor {
  imageDarkRoast1?: string;
  imageDarkRoast2?: string;
  imageDarkRoast3?: string;
  imageMediumRoast1?: string;
  imageMediumRoast2?: string;
  imageMediumRoast3?: string;
  imageLightRoast1?: string;
  imageLightRoast2?: string;
  imageLightRoast3?: string;
  imageEspressoRoast1?: string;
  imageEspressoRoast2?: string;
  imageEspressoRoast3?: string;
  isDarkRoast?: boolean;
  isMediumRoast?: boolean;
  isLightRoast?: boolean;
  isEspressoRoast?: boolean;
}

const Sponsor = (props: PropsSponsor) => {
  return (
    <>
      <div className="p-5">
        <div>
          <h3 className="text-2xl text-center p-7 font-bold">Sponsors</h3>
        </div>
        <div>
          {props.isDarkRoast ? (
            <div className="">
              <div className="text-center p-2">
                <h4> Dark Roast Tier Supporters</h4>
              </div>
              <div className="justify-center flex gap-4">
                <img className="rounded-lg w-1/2" src={props.imageDarkRoast1} />
              </div>
            </div>
          ) : null}
        </div>
        <div className="p-4">
          {props.isMediumRoast ? (
            <div className="Dark-Roast">
              <div className="text-center p-2">
                <h4> Medium Roast Tier Supports </h4>
              </div>
              <div className="justify-center flex gap-4">
                <img
                  className="rounded-lg w-1/4"
                  src={props.imageMediumRoast1}
                />
                <img
                  className="rounded-lg w-1/4"
                  src={props.imageMediumRoast2}
                />
                <img
                  className="rounded-lg w-1-4"
                  src={props.imageMediumRoast3}
                />
              </div>
            </div>
          ) : null}
        </div>
        <div className="p-4">
          {props.isLightRoast ? (
            <div className="">
              <div className="text-center p-2">
                <h4>Light Roast Tier Supporters</h4>
              </div>
              <div className="justify-center flex gap-4">
                <img
                  className="rounded-lg w-1/5"
                  src={props.imageLightRoast1}
                />
                <img
                  className="rounded-lg w-1/5"
                  src={props.imageLightRoast2}
                />
                <img
                  className="rounded-lg w-1/5"
                  src={props.imageLightRoast3}
                />
              </div>
            </div>
          ) : null}
        </div>
        <div className="p-4">
          {props.isEspressoRoast ? (
            <div className="">
              <div className="text-center p-2">
                <h4>Espresso Roast Tier Supporters</h4>
              </div>
              <div className="justify-center flex gap-4">
                <img
                  className="rounded-lg w-1/6"
                  src={props.imageEspressoRoast1}
                />
                <img
                  className="rounded-lg w-1/6"
                  src={props.imageEspressoRoast2}
                />
                <img
                  className="rounded-lg w-1/6"
                  src={props.imageEspressoRoast3}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Sponsor;
