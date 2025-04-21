interface PropsSectionCard {
  image: string;
  imageStyle: string;
  imgWrapperStyle: string;
  title?: string;
  blurb?: string;
  isButton?: boolean;
  btnTitle?: string;
  btnStyle?: string;
}

const SectionCard = (props: PropsSectionCard) => {
  return (
    <div>
      <div className={props.imgWrapperStyle}>
        <img className={props.imageStyle} src={props.image} />
      </div>
      <div className="text-center p-1">
        <h5>{props.title}</h5>
      </div>
      <div>
        <p>{props.blurb}</p>
      </div>
      <div className="flex justify-center py-10 ">
        {props.isButton ? (
          <button className={props.btnStyle}>{props.btnTitle}</button>
        ) : null}
      </div>
    </div>
  );
};

export default SectionCard;
