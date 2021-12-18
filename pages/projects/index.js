import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import Loading from "app/components/layout/loading";
import SingleTimelineCard from "app/components/elements/cards/singleTimelineCard";
import { useG11n } from "next-g11n";
import App from "models/apps";
import dbConnect from "app/lib/mongodb";
import dictionary from "app/locales/dictionary";

export default function Home({ apps, setTitle }) {
  const { translate: t } = useG11n(dictionary);
  useEffect(() => {
    setTitle(t("projectsNavLink"));
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
        setData(item);
        setLoad(false);
      });
    }, []);

    return load ? (
      <Loading stillLoad={load} />
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
                          return (
                            <SingleTimelineCard single={single} key={index} />
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
      <Container className="min-vh-100">
        <section className="timeline_area section_padding_130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-8 col-lg-6">
                <div className="section_heading text-center">
                  <h3>{t("appsPageContainerTitle")}</h3>
                  <div className="line"></div>
                </div>
              </div>
            </div>
            <div className="row">
              {apps.length > 0 ? (
                <RenderTimeLine items={apps} />
              ) : (
                <>{t("noDataToShow")}</>
              )}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export async function getStaticProps(context) {
  try {
    await dbConnect();
    const apps = await App.find().sort({ finishDate: -1 });
    return {
      props: {
        apps: JSON.parse(JSON.stringify(apps)),
      }, // will be passed to the page component as props
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        apps: [],
      },
    };
  }
}
