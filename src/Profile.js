import { faBaby } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";



const Profile = () => {
  return ( 
    <div className="">
      <div class="sidenav2">
        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
        <Link className="profileLinkBig pt-5">Home</Link>
        <h3 className="profileLink pt-5">For Developers</h3>
      </div>
      <Container fluid className="containerSpace">
        <Row className="px-md-5 mx-md-5 px-3">
          <Col  xs={12} md={8}>
            <h4 className="my-4">Pinned Tasks</h4>
            <div className="card-body">
              <h5 className="card-title text-center">No Pinned task</h5>
            </div>
          </Col>
        </Row>
        <Row className="px-3 px-md-5 ms-md-5 mx-lg-5">
          <Col>
            <h4 className="mt-4">Overview</h4>
            <Row className="mb-5">
              <Col xs={6} lg={3}>
                <Link className="pb-5" to="/task"> 
                  <div className="small-card-body pt-4 my-4">
                      <div className="card-title py-5 my-2 text-center"><FontAwesomeIcon icon={faBaby}></FontAwesomeIcon> </div>
                    <div className="card-footer ">
                      <Row className="px-2 colorChange mx-auto py-3">
                        <Col>
                          <span className="text-decoration-none">Pending</span>
                        </Col>
                        <Col className="text-end">
                        <span>0</span>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col xs={6} lg={3}>
                <Link className="pb-5" to="/task"> 
                  <div className="small-card-body pt-4 my-4">
                      <div className="card-title py-5 my-2 text-center"><FontAwesomeIcon icon={faBaby}></FontAwesomeIcon> </div>
                    <div className="card-footer ">
                      <Row className="px-2 colorChange mx-auto py-3">
                        <Col>
                          <span className="text-decoration-none">Pending</span>
                        </Col>
                        <Col className="text-end">
                        <span>0</span>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col xs={6} lg={3}>
                <Link className="pb-5" to="/task"> 
                  <div className="small-card-body pt-4 my-4">
                      <div className="card-title py-5 my-2 text-center"><FontAwesomeIcon icon={faBaby}></FontAwesomeIcon> </div>
                    <div className="card-footer ">
                      <Row className="px-2 colorChange mx-auto py-3">
                        <Col>
                          <span className="text-decoration-none">Pending</span>
                        </Col>
                        <Col className="text-end">
                        <span>0</span>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col xs={6} lg={3}>
                <Link className="pb-5" to="/task">
                  <div className="small-card-body pt-4 my-4">
                      <div className="card-title py-5 my-2 text-center"><FontAwesomeIcon icon={faBaby}></FontAwesomeIcon> </div>
                    <div className="card-footer ">
                      <Row className="px-2 colorChange mx-auto py-3">
                        <Col>
                          <span className="textDecorationNone">Pending</span>
                        </Col>
                        <Col className="text-end">
                        <span>0</span>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;