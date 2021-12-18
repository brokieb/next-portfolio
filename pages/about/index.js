import { Container, Button } from "react-bootstrap";
import Image from "next/image";
import profilePicture from "app/components/images/main-pic.png";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useG11n } from "next-g11n";
import dictionary from "app/locales/dictionary";
export default function Home({ setTitle, dis }) {
  const router = useRouter();
  const { translate: t } = useG11n(dictionary);
  useEffect(() => {
    setTitle(t("aboutNavLink"));
  }, []);
  return (
    <Container className="d-flex justify-content-start align-items-center flex-column min-vh-100">
      <Image
        src={profilePicture}
        alt="Picture of the author"
        width={300}
        height={300}
      />
      <h1>{t("hello")}</h1>
    </Container>
  );
}
