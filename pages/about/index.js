import { Container, Button, Row, Col } from "react-bootstrap";
import Image from "next/image";
import profilePicture from "app/components/images/main-pic.jpeg";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useG11n } from "next-g11n";
import dictionary from "app/locales/dictionary";
import image_1_b from "app/components/images/befores/bef-1.png";
import image_2_b from "app/components/images/befores/bef-2.png";
import image_3_b from "app/components/images/befores/bef-3.png";
import image_1_a from "app/components/images/befores/aft-1.png";
import image_2_a from "app/components/images/befores/aft-2.png";
import image_3_a from "app/components/images/befores/aft-3.png";
import { faArrowRight, faArrowBottom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home({ setTitle, dis }) {
  const router = useRouter();
  const { translate: t } = useG11n(dictionary);
  useEffect(() => {
    setTitle(t("aboutNavLink"));
  }, []);
  return (
    <Container className="d-flex justify-content-start align-items-center flex-column gap-3">
      <Row>
        <Col xs={12} lg={4} className="d-flex justify-content-center">
          <Image
            src={profilePicture}
            alt="Picture of the author"
            width={300}
            height={300}
          />
        </Col>
        <Col xs={12} lg={8}>
          <h1>{t("hello")}</h1>
          <p>
            Moim głównym hobby jest tworzeczenie czegoś ciekawego, uwielbiam
            tworzyć programy które usprawniają czyjąś pracę lub pozwalają mi
            łatwo na czymś zarabiać :)
          </p>
          <p>
            Moją naukę opieram w większości czasu na praktyce. Poza tematami
            bardziej złożonymi - gdzie studiuję dniami dokumentację lub oglądam
            kursy o których później, wolę próbować samemu moich sił i tworzyć
            coś z niczego.
          </p>
          <p>
            Rozwijając swoje aplikacje, bardzo często wracam do wcześniej
            utworzonych projektów i piszę je na nowo - utrwalając wcześniej
            nauczone techniki, poniżej kilka przykładów przed i po:
          </p>
        </Col>
      </Row>
      <div className="bg-dark p-3 m-3 w-75">
        <h3 className="text-light">Przykład #1</h3>
        <div className="d-flex align-items-center flex-row gap-3 w-100">
          <Image
            src={image_1_b}
            width={image_1_b.width}
            height={image_1_b.height}
            alt="Picture of the author"
          />
          <Image
            src={image_1_a}
            width={image_1_a.width}
            height={image_1_a.height}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="bg-dark p-3 m-3 w-75">
        <h3 className="text-light">Przykład #2</h3>
        <div className="d-flex align-items-center flex-column gap-3 w-100">
          <Image
            src={image_2_b}
            width={image_2_b.width}
            height={image_2_b.height}
            alt="Picture of the author"
          />
          <FontAwesomeIcon icon={faArrowBottom} />
          <Image
            src={image_2_a}
            width={image_2_a.width}
            height={image_2_a.height}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="bg-dark p-3 m-3 w-75">
        <h3 className="text-light">Przykład #3</h3>
        <div className="d-flex align-items-center flex-column gap-3 w-100">
          <Image
            src={image_3_b}
            width={image_3_b.width}
            height={image_3_b.height}
            alt="Picture of the author"
          />
          <FontAwesomeIcon icon={faArrowBottom} />
          <Image
            src={image_3_a}
            width={image_3_a.width}
            height={image_3_a.height}
            alt="Picture of the author"
          />
        </div>
      </div>
      <p>
        AKtualną wiedzę którą czerpię o React/next JS to kursy tworzone przez
        Academing
      </p>
      <p>
        Jeżeli chodzi o to w jakim kierunku chciałbym się rozwijać, nie mam
        jednoznacznej odpowiedzi jednak mógłbym śmiało stwierdzć że lepiej czuje
        się w projektowaniu samych baz danych i tworzeniu logiki, niż tworzeniu
        pięknych elementów frontend - może to się zmieni z czasem :)
      </p>
      <p>
        Za moje cele które sobie wyznaczyłem na przyszłe dni/tygodnie jest na
        pewno nauka TypeScript
      </p>
    </Container>
  );
}
