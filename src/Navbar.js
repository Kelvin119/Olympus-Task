import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBank, faBox, faHome, faPlus, faPray} from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (  
      <div>
        <Container fluid className="navi py-3">
          <Row className="py-5 px-3">
            <Col className="text-md-end" xs={9} md={11} >
            <h4 className="p-0 m-0">Greetings my liege</h4>
            <span>You have 0 task pending</span>
            </Col>
            <Col xs={3} md={1}>
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            </Col>
          </Row>
        </Container>
          <div class="sidenav">
            <Link className="pb-5" to="/"><FontAwesomeIcon icon={faBox}></FontAwesomeIcon></Link>
            <Link className="pb-5" to="/task"><FontAwesomeIcon icon={faBank}></FontAwesomeIcon></Link>
            <Link className="pb-5" to="/add"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></Link>
            <Link className="pb-5" to="/profile"><FontAwesomeIcon icon={faPray}></FontAwesomeIcon></Link>
          </div>
      </div>
  );
}

export default Navbar;