import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs, { sendForm } from "emailjs-com";

const Contacts = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f5jl2rb",
        "template_wdw9f3m",
        e.target,
        "user_KJ1exvatuylwnGVBGKNaU"
      )
      .then(
        (result) => {
          // console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div id="contact">
      <Container>
        <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
        <Row className=" bg-light">
          <Col>
            <Jumbotron className="contact-jumbotron mt-5">
              <Form onSubmit={sendEmail}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mr. XXX"
                    name="user_name"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="+91 XXXXXXXXX"
                    name="contact_number"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@mail.com"
                    name="user_email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={3}
                    required
                  />
                </Form.Group>
                <Button variant="primary" value="send" type="submit">
                  Send
                </Button>
              </Form>
            </Jumbotron>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <p className="pt-3 text-center ">
            {/* @Copy-Right 2021 Rohan Ranjan */}
            Made with ❤️ India.
          </p>
        </Row>
      </Container>
    </div>
  );
};

export { Contacts };
