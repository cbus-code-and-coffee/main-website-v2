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
        <div className="text-2xl text-center p-7 font-bold">
          <h4>Sponsors</h4>
        </div>
        <div className="p-4">
          {props.isDarkRoast ? (
            <div>
              <div className="text-center p-2">
                <h4> Dark Roast Tier Supporters </h4>
              </div>
              <div className="flex gap-4 justify-center">
                {props.imageDarkRoast1 && (
                  <img className="rounded-lg" src={props.imageDarkRoast1} />
                )}
                {props.imageDarkRoast2 && (
                  <img className="rounded-lg" src={props.imageDarkRoast2} />
                )}
                {props.imageDarkRoast3 && (
                  <img className="rounded-lg" src={props.imageDarkRoast3} />
                )}
              </div>
            </div>
          ) : null}
        </div>
        <div className="p-4">
          {props.isMediumRoast ? (
            <div>
              <div className="text-center p-2">
                <h4> Medium Roast Tier Supporters </h4>
              </div>
              <div className="flex gap-4 justify-center">
                {props.imageMediumRoast1 && (
                  <img
                    className="rounded-lg w-96"
                    src={props.imageMediumRoast1}
                  />
                )}
                {props.imageMediumRoast2 && (
                  <img
                    className="rounded-lg w-96"
                    src={props.imageMediumRoast2}
                  />
                )}
                {props.imageMediumRoast3 && (
                  <img
                    className="rounded-lg w-96"
                    src={props.imageMediumRoast3}
                  />
                )}
              </div>
            </div>
          ) : null}
        </div>
        <div className="p-4">
          {props.isLightRoast ? (
            <div>
              <div className="text-center p-2">
                <h4> Light Roast Tier Supporters </h4>
              </div>
              <div className="flex gap-4 justify-center">
                {props.imageLightRoast1 && (
                  <img
                    className="rounded-lg w-64"
                    src={props.imageLightRoast1}
                  />
                )}
                {props.imageLightRoast2 && (
                  <img
                    className="rounded-lg w-64"
                    src={props.imageLightRoast2}
                  />
                )}
                {props.imageLightRoast3 && (
                  <img
                    className="rounded-lg w-64"
                    src={props.imageLightRoast3}
                  />
                )}
              </div>
            </div>
          ) : null}
        </div>
        <div className="p-4">
          {props.isEspressoRoast ? (
            <div>
              <div className="text-center p-2">
                <h4> Espresso Roast Tier Supporters </h4>
              </div>
              <div className="flex gap-4 justify-center">
                {props.imageEspressoRoast1 && (
                  <img
                    className="rounded-lg w-56"
                    src={props.imageEspressoRoast1}
                  />
                )}
                {props.imageEspressoRoast2 && (
                  <img
                    className="rounded-lg w-56"
                    src={props.imageEspressoRoast2}
                  />
                )}
                {props.imageEspressoRoast3 && (
                  <img
                    className="rounded-lg w-56"
                    src={props.imageEspressoRoast3}
                  />
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Sponsor;
