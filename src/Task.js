import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Task = () => {
  return (  
    <Container fluid className="containerSpace">
        <Row className="px-md-5 mx-md-5 px-3 full justify-content-center">
          <Col  xs={12} md={6}>
            <div className="card-body">
              <h5 className="card-title-task text-center">No tasks yet</h5>
              <Row className="justify-content-center pt-3 pb-5">
                <Col xs={8} lg={5}>
                  <Link className="pb-5" to="/add"> 
                    <button className="btn btnColor fw-bold py-3">Add</button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
    </Container>
  );
}

export default Task;