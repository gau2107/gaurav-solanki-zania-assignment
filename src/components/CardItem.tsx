import { useState } from "react";
const Spinner = process.env.PUBLIC_URL + "/loader.gif";
interface Props {
  heading: string;
  image: string;
  onImageSelect: () => void;
}
export default function CardItem({ heading, image, onImageSelect }: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="card">
      <img
        className={"card-img"}
        src={loading ? Spinner : image}
        alt={heading}
        onClick={() => onImageSelect()}
        onLoad={() => setLoading(false)}
      />
      <div className="card-content">
        <h2 className="card-title">{heading}</h2>
      </div>
    </div>
  );
}
