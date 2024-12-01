import LazyImage from "./LazyImage";
interface Props {
  heading: string;
  image: string;
  onImageSelect: () => void;
}
export default function CardItem({ heading, image, onImageSelect }: Props) {
  return (
    <div className="card">
      <LazyImage
        className={"card-img"}
        image={image}
        alt={heading}
        onClickCallback={() => onImageSelect()}
      />
      <div className="card-content">
        <h2 className="card-title">{heading}</h2>
      </div>
    </div>
  );
}
