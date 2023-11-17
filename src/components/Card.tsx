const Card = (props: {
  title: String;
  pText: String;
  btnText: String;
  image: string;
  imageAlt: string;
}) => {
  return (
    <>
      <div className='card-wrapper flex'>
        <div className='card-image-wrapper'>
          <img src={props.image} alt={props.imageAlt} />
        </div>
        <div className='card-content-wrapper'>
          <div className='card-headers-wrapper flex flex-col gap-3'>
            <h3 className='text-2xl'>{props.title}</h3>
          </div>
          <p className='text-base'>{props.pText}</p>
          <div className='card-btn-wrapper mt-8'>
            <button>{props.btnText}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
