import { fetchNews } from "../../redux/actions/homeAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillInfoSquareFill } from "react-icons/bs";
import SidebarFooter from "../SidebarFooter";
import { Row } from "react-bootstrap";
import "/Repository/BW-LinkedIn/src/assets/style/sideNews.css";

const NewsSide = () => {
  const { data: news } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Effetto eseguito");
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <>
      <Row>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h2>LinkedIn Notizie</h2>
          <BsFillInfoSquareFill />
        </div>
        {news &&
          news.slice(0, 6).map((elem) => (
            <div key={elem.id} className="card news p-3">
              <ul className="mb-0">
                <li>
                  <div>
                    <p className="d-block">{elem.summary}</p>
                    <span>{elem.published_at}</span>
                  </div>
                </li>
              </ul>
            </div>
          ))}

        <div style={{ position: "sticky", top: "100px" }}>
          <SidebarFooter />
        </div>
      </Row>
    </>
  );
};

export default NewsSide;
