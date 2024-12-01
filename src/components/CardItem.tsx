interface Props {
  heading: string;
  image: string;
  onImageSelect: any;
}
export default function CardItem({heading, image, onImageSelect}: Props) {
  return (
    <div className="card">
      <img src={image} alt={heading} onClick={() => onImageSelect()}/>
      <div className="card-content">
        <h2 className="card-title">{heading}</h2>
      </div>
    </div>
  );
}
