import { useRef, useState } from "react";
import { Button, Col, Form, Row,Navbar } from "react-bootstrap";

const Navbaar = (props) => {
  let [sercheValue, setSercheValue] = useState();
  let ref = useRef()
  function serche(e) {
    
    props.filterBySerch(e);
    setSercheValue('');
  }
    return (
      <div className="navbar-parent mb-5 fixed-top">
        <div className="container">
          <Row className="d-flex justify-content-between pt-3 pb-2 text-center">
            <Form className="col-sm-8" dir="rtl">
              <Row className="d-flex justify-content-center">
                <Col xs="auto">
                  <Form.Control ref={ref} onChange={()=>setSercheValue(ref.current.value)}
                    type="text"
                    value={sercheValue}
                    placeholder="بحث.."
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button onClick={()=>{serche(sercheValue)}}>بحث</Button>
                </Col>
              </Row>
            </Form>
            <Navbar.Brand className="col-sm-3 my-sm-0 mt-4">
              بندقة - Bondoka
            </Navbar.Brand>
          </Row>
        </div>
      </div>
    );
}
export default Navbaar