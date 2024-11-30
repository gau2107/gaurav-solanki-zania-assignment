interface Props {
  heading: string
}
export default function CardItem({heading}: Props) {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/300x200" alt={heading} />
      <div className="card-content">
        <h2 className="card-title">{heading}</h2>
      </div>
    </div>
  );
}
