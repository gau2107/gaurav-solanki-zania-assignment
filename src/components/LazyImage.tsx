import { useState } from "react";

const Spinner = process.env.PUBLIC_URL + "/loader.gif";

interface Props {
  image: string;
  className: string;
  alt: string;
  onClickCallback?: () => void;
}

export default function LazyImage({
  image,
  className,
  alt,
  onClickCallback,
}: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <img
      className={className}
      src={loading ? Spinner : image}
      alt={alt}
      onClick={() => (onClickCallback ? onClickCallback() : {})}
      onLoad={() => setLoading(false)}
    />
  );
}
