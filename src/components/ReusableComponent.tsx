interface PropsComponent {
    image: string;
    imageStyle: string
    title: string;
    blurb: string;
    isButton?: boolean;
    btnTile?: string

}

const ReusableComponent = (props: PropsComponent) => {
    return (
        <div>
            <div className="flex justify-center p-6">
                <img className={props.imageStyle} src={props.image} />
            </div>
            <div className="text-center p-1">
                <h5>{props.title}</h5>
            </div>
            <div >
                <p>{props.blurb}</p>
                {props.isButton ? <button>{props.btnTile}</button> : null}
            </div>
        </div >
    );
}

export default ReusableComponent;