import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("/api/getApps").then((item) => {
      setItems(item.data);
      setLoading(false);
    });
  }, []);

  function RenderTimeLine({ items }) {
    const [load, setLoad] = useState(true);
    const [data, setData] = useState({});

    let lastDate = "";
    useEffect(() => {
      const promise1 = new Promise((resolve, reject) => {
        let datas = [];
        for (const data of items) {
          if (datas[data.finishDate]) {
            datas[data.finishDate].push(data);
          } else {
            datas[data.finishDate] = [data];
          }
        }
        resolve(datas);
      });
      promise1.then((item) => {
        console.log(item, "?");
        setData(item);
        setLoad(false);
      });
    }, []);

    return load ? (
      <>LOAD</>
    ) : (
      <>
        {Object.entries(data).map((item, mainIndex) => {
          return (
            <div key={mainIndex}>
              <div className="row">
                <div className="col-12">
                  <div className="apland-timeline-area">
                    <div className="single-timeline-area">
                      <div className="timeline-date">
                        <p>{dayjs(item[0]).format("MM YYYY")}</p>
                      </div>

                      <div className="row">
                        {data[item[0]].map((single, index) => {
                          console.log(single, "<");
                          return (
                            <div
                              className="col-12 col-md-8 col-lg-5"
                              key={index}
                            >
                              <div
                                className="single-timeline-content d-flex wow fadeInLeft"
                                data-wow-delay="0.3s"
                              >
                                <div className="timeline-icon">
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    className="icon"
                                  />
                                </div>
                                <div className="timeline-text">
                                  <h6>{single.title}</h6>
                                  <p>{single.shortDesc}</p>
                                  <hr className="m-2" />
                                  <small>
                                    <i>{single.techDesc}</i>
                                  </small>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
  return (
    <>
      <Container>
        <section className="timeline_area section_padding_130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-8 col-lg-6">
                <div className="section_heading text-center">
                  <h3>Moje projekty w czasie</h3>
                  <div className="line"></div>
                </div>
              </div>
            </div>
            <div className="row">
              {loading ? <>LOAD</> : <RenderTimeLine items={items} />}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
