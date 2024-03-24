
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ContactUs() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div style={{ border: '3px solid', padding: '20px', borderRadius: '5px' }}>
        <Form >
        <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="kimathi street" />
        </Form.Group>


        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Country</Form.Label>
            <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>City</Form.Label>
            <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
            </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </div>
    </div> 
  );
}

export default ContactUs;