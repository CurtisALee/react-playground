function Card({ title, date }) {
  return (
    <div className = "card">
      <h1 className = "card__title">{title}</h1>
      <span className = "card__date">{date}</span>
    </div>
  );
}

export default function CardWrapper() {
  return (
    <>
      <Card
        title = "This is a title"
        date = "22 May 2023"
      />
      <Card
        title = "This is another title"
        date = "25 May 2023"
      />
    </>
  );
}