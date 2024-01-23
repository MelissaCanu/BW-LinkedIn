import { useEffect, useState } from "react";
import { Col, Container, Pagination, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CaretLeft, CaretRight } from "react-bootstrap-icons";
import {
  addErrorMessageAction,
  fetchPost,
  hasErrorTrueAction,
  isLoadingFalseAction,
  isLoadingTrueAction,
} from "/Repository/BW-LinkedIn/src/redux/actions/homeAction";

import FormHome from "./FormHome";
import SidebarFooter from "../SidebarFooter";
import SinglePost from "./SinglePost";
const Home = () => {
  const posts = useSelector((state) => state.post.data);
  const isLoading = useSelector((state) => state.currentUser.isLoading);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState("");
  const [postText, setPostText] = useState("");
  const [modifica, setModifica] = useState(false);
  const [idPost, setIdPost] = useState("");
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchUser = async () => {
    try {
      dispatch(isLoadingTrueAction());
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlOTBhNGJkNWQxMjAwMTg5MGQzMTgiLCJpYXQiOjE3MDU5MzkxMDgsImV4cCI6MTcwNzE0ODcwOH0.1uiduDteuO646k5b6tK8nq0uhzV1ZV4npoqRktlImNI",
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        setProfile(data);
      } else {
        dispatch(hasErrorTrueAction());
        throw new Error(resp.status);
      }
    } catch (error) {
      dispatch(addErrorMessageAction(error.message));
      console.log("Si è verificato un errore", error.message);
    } finally {
      dispatch(isLoadingFalseAction());
    }
  };

  const delPost = async (postId) => {
    try {
      console.log("Cancella");
      dispatch(isLoadingTrueAction());
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlOTBhNGJkNWQxMjAwMTg5MGQzMTgiLCJpYXQiOjE3MDU5MzkxMDgsImV4cCI6MTcwNzE0ODcwOH0.1uiduDteuO646k5b6tK8nq0uhzV1ZV4npoqRktlImNI",
        },
      });
      if (resp.ok) {
        dispatch(fetchPost());
      } else {
        dispatch(hasErrorTrueAction());
        throw new Error(resp.status);
      }
    } catch (error) {
      dispatch(addErrorMessageAction(error.message));
      console.log("Si è verificato un errore", error.message);
    } finally {
      dispatch(isLoadingFalseAction());
    }
  };

  useEffect(() => {
    dispatch(fetchPost());
    fetchUser();
  }, []);

  return isLoading ? (
    <div className="mt-5 d-flex justify-content-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : (
    <Container fluid="lg" className="my-3">
      <Row>
        <Col xs={12} md={2} lg={2}>
          {/* <Sidebar profile={profile} /> */}
        </Col>
        <Col xs={12} md={10} lg={7}>
          <FormHome
            profile={profile}
            handleClose={handleClose}
            handleShow={handleShow}
            show={show}
            setPostText={setPostText}
            postText={postText}
            modifica={modifica}
            setModifica={setModifica}
            idPost={idPost}
          />

          {posts &&
            profile &&
            posts
              .filter((elem) => elem.user._id === profile._id)
              .reverse()
              .map((elem, i) => (
                <SinglePost
                  elem={elem}
                  key={`post${i}`}
                  cancella={delPost}
                  profile={profile}
                  handleClose={handleClose}
                  handleShow={handleShow}
                  show={show}
                  setPostText={setPostText}
                  setModifica={setModifica}
                  setIdPost={setIdPost}
                />
              ))}
          <hr />

          {console.log(posts, "LEG")}
          {posts
            .reverse()
            .map(
              (elem, i) =>
                i >= page * 5 - 5 &&
                i < page * 5 && (
                  <SinglePost
                    elem={elem}
                    key={`post${i}`}
                    cancella={delPost}
                    profile={profile}
                    handleClose={handleClose}
                    handleShow={handleShow}
                    show={show}
                    setPostText={setPostText}
                    setModifica={setModifica}
                    setIdPost={setIdPost}
                  />
                )
            )}
          <div className="d-flex justify-content-center">
            <Pagination className="d-flex justify-content-center">
              <Pagination.Item
                onClick={() => {
                  page > 1 && setPage(page - 1);
                }}
              >
                <CaretLeft />
              </Pagination.Item>
              <Pagination.Item disabled>{page - 1 === 0 ? "..." : page - 1}</Pagination.Item>
              <Pagination.Item active={true}>{page}</Pagination.Item>
              <Pagination.Item disabled>{page === posts.length / 5 ? "..." : page + 1}</Pagination.Item>
              <Pagination.Item
                onClick={() => {
                  console.log(posts.length);
                  page < posts.length / 5 && setPage(page + 1);
                }}
              >
                <CaretRight />
              </Pagination.Item>
            </Pagination>
          </div>
        </Col>
        <Col xs={12} lg={3}>
          {/* <NewsSidebar /> */}
          <div style={{ position: "sticky", top: "100px" }}>
            {/* <PromoCard /> */}
            <SidebarFooter />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
