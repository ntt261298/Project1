import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Input, Label, Form, FormGroup } from 'reactstrap';
import { addItem } from '../actions/itemsAction';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class ItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: ''
    };

    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onAddClick() {
    this.toggle();
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    }
    if(newItem.name) {
      this.props.addItem(newItem);
    }

    this.toggle();
  }

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={ {margin: '2rem 0'} }
          onClick={this.onAddClick}
          >
          Add Item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Enter Item</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label>Name: </Label>
                <Input type="text" name="name" placeholder="Add shopping item" onChange={this.onChange} />
                <Button color="primary" style={{marginTop: '1rem'}} block>Submit</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

ItemModal.propTypes = {
  addItem: PropTypes.func.isRequired
}


export default connect(null, { addItem })(ItemModal);
