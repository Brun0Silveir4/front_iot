import "./style.css"

export default function Card({ temp, umid }) {
  return (
    <>
      {temp ? (
        <p>{temp} °C</p>
      ) : ''}
      {umid ? (
        <p>{umid} %</p>
      ): ''}
    </>
  );
}
