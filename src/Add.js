import { Col, Container, Form, FormLabel, Row } from "react-bootstrap";

const Add = () => {
  return (  
    <Container fluid className="containerSpace">
      <Row className="px-md-5 mx-md-5 px-3 full justify-content-center">
        <Col  xs={12} md={9} lg={6}>
          <div>
            <Form>
            <div class="mb-5">
              <Row>
                <Col>
                <FormLabel for="exampleInput" className="form-label FormName">Task Name</FormLabel>
                </Col>
                <Col className="text-end">
                <span className="spanName">0</span>
                </Col>
              </Row>
              
              <input type="text" className="form-control inputColor text-light" id="exampleInput" aria-describedby="emailHelp"></input>
            </div>
            <div className="mb-4">
            <Row>
                <Col>
                <FormLabel for="exampleInput" className="form-label FormName">Add Note</FormLabel>
                </Col>
                <Col className="text-end">
                <span className="spanName">0</span>
                </Col>
              </Row>
              <textarea className="form-control inputColor text-light" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-5 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
              <label className="form-check-label FormName" for="exampleCheck1">Pin Task</label>
            </div>
            </Form>
            <button className="btn btnFull fw-bold py-3">Add Task</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Add;