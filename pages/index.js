import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import profilePicture from "app/components/images/main-pic.png";
import LayoutTriangle from "app/components/layout/layoutTriangle";
import axios from "axios";
import SingleAppCard from "app/components/elements/cards/singleAppCard";
import { useEffect, useState } from "react";

const myLoader = ({ src, width, quality }) => {
  return `app/components/images/main-pic?${src}?w=${width}&q=${quality || 75}`;
};

export default function Home({ setTitle }) {
  const [data, setData] = useState({});
  const [techs, setTechs] = useState({});
  const [loadingData, setLoadingData] = useState(true);
  const [loadingTechs, setLoadingTechs] = useState(true);
  useEffect(() => {
    setTitle("Strona główna");
    axios
      .get("/api/getApps")
      .then((item) => {
        setData(item.data);
        setLoadingData(false);
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get("/api/getTechs").then((item) => {
      setTechs(item.data);
      setLoadingTechs(false);
    });
  }, []);

  return (
    <>
      <title>Strona główna</title>
      <Container className="border-bottom" style={{ minHeight: "60vh" }}>
        <div className="d-flex justify-content-around align-items-center flex-wrap my-3">
          <div className="mb-lg-5">
            <h1>Damian Woźniak</h1>
            <h4>Web developer</h4>
            <p className="pt-3"> dsad sad asd ad</p>
          </div>
          <div>
            <Image
              src={profilePicture}
              alt="Picture of the author"
              width={400}
              height={400}
            />
          </div>
        </div>
      </Container>
      <LayoutTriangle
        className="d-flex align-items-center"
        bg="gray-900"
        text="light"
        style={{ minHeight: "60vh" }}
      >
        <h1>Moje aplikacje</h1>
        <Container className="my-4 d-flex flex-column gap-5">
          <div className="d-flex flex-wrap justify-content-around">
            {loadingData ? (
              <>LOADI</>
            ) : (
              data.map((item, index) => {
                return (
                  <Col xs={12} md={6} xl={4} key={index}>
                    <SingleAppCard item={item} />
                  </Col>
                );
              })
            )}
          </div>
          <div className="d-flex justify-content-end">
            <Button variant="success">Zobacz więcej...</Button>
          </div>
        </Container>
      </LayoutTriangle>
      <Container style={{ minHeight: "600px" }}>
        <h1>Technologie</h1>
        <div className="d-flex flex-wrap justify-content-around gap-5 pt-5">
          {loadingTechs ? (
            <>LOADI</>
          ) : (
            techs.map((item, index) => {
              return (
                <span
                  className="d-flex flex-column align-items-center"
                  key={index}
                >
                  <i className={`px-5 py-2 display-3 ${item.icon}`}></i>
                  {item.title}
                </span>
              );
            })
          )}
        </div>
      </Container>
    </>
  );
}
