import { Container } from "react-bootstrap";
import Image from "next/image";
import profilePicture from "app/components/images/main-pic.png";
import { useEffect } from "react";
export default function Home({ setTitle }) {
  useEffect(() => {
    setTitle("O mnie");
  }, []);
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column">
      <Image
        src={profilePicture}
        alt="Picture of the author"
        width={300}
        height={300}
      />
      <h1>Hej, jestem Damian</h1>
    </Container>
  );
}
