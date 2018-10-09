import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Contact extends React.Component {
  state = {
    Email: '',
    Phone: '',
    Address: ''
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmitClick(e) {
    return;

  }

  render() {
    return (
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input type="email" name="Email" onChange={this.onChanged.bind(this)} placeholder="Your email..." />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="phoneNumber">Password</Label>
              <Input type="text" name="Phone" onChange={this.onChanged.bind(this)} placeholder="Your phone number..." />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input type="text" name="Address" onChange={this.onChanged.bind(this)} placeholder="So 1 Giai Phong Hanoi"/>
        </FormGroup>
        <Button onClick={this.onSubmitClick.bind(this)}></Button>
      </Form>
    );
  }
}

export default Contact;
