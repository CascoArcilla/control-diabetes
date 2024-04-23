import { useParams } from "react-router-dom";

export default function Home() {
  const { iduser } = useParams();

  return (
    <>
      <h1>Welcome</h1>
      <p>Hola soy yo</p>
      {iduser ? <p>{iduser}</p> : ""}
    </>
  );
}
