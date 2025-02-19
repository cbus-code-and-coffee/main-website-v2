interface PropsSectionCard {
  image: string;
  imageStyle: string;
  title: string;
  blurb: string;
  isButton?: boolean;
  btnTitle?: string;
  buttonStyle?: string;
}

const SectionCard = (props: PropsSectionCard) => {
  return (
    <div>
      <div className="flex justify-center p-6">
        <img className={props.imageStyle} src={props.image} />
      </div>
      <div className="text-center p-1">
        <h5>{props.title}</h5>
      </div>
      <div>
        <p>{props.blurb}</p>
      </div>
      <div className="flex justify-center py-10">
        {props.isButton ? (
          <button className={props.buttonStyle}>{props.btnTitle}</button>
        ) : null}
      </div>
    </div>
  );
};

export default SectionCard;
