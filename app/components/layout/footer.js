import LayoutTriangle from "app/components/layout/layoutTriangle";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { useG11n } from "next-g11n";
import dictionary from "app/locales/dictionary";
import PLicon from "app/components/images/pl.svg";
import ENicon from "app/components/images/gb.svg";
import Image from "next/image";
export default function Footer() {
  const { translate: t } = useG11n(dictionary);
  return (
    <footer style={{ zIndex: 6 }}>
      <LayoutTriangle
        className="d-flex align-items-center"
        bg="gray-900"
        text="light"
        style={{ minHeight: "60vh" }}
        botHidden={true}
        minHeight="50px"
      >
        <address>
          Damian Woźniak <br />
          damian@wozniak1.pl
          <br />
          {t("address")}
          <br />
        </address>
      </LayoutTriangle>
      <div className="bg-dark">
        <Container className="d-flex align-items-center justify-content-end gap-3 text-light">
          <span className="text-light">Damian Woźniak 2021</span>
          <Link href="" locale="en">
            <Image src={ENicon} height={40} width={25} />
          </Link>
          <Link href="" locale="pl">
            <Image src={PLicon} height={40} width={25} />
          </Link>
        </Container>
      </div>
    </footer>
  );
}
