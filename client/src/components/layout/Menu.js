import React from 'react';
import { Container, Button, Navbar, NavbarBrand, InputGroup, Input, InputGroupAddon, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { toggleLogin } from '../../actions/itemsAction';
import { userLogout } from '../../actions/accountsAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.onLoginClick = this.onLoginClick.bind(this);
  }

  onLoginClick() {
    this.props.toggleLogin();
  }

  onLogoutClick() {
    this.props.toggleLogin();
    this.props.userLogout(this.props.account.token);
  }

  render() {
    const token = this.props.account.token;
    return (
      <div>
        <Navbar  color="dark" dark>
          <Container>
            <NavbarBrand href="/" className="mr-auto">NotMine</NavbarBrand>
            <InputGroup>
              <Input placeholder="Find product..."/>
              <InputGroupAddon addonType="append">
                <Button color="secondary">Search</Button>
              </InputGroupAddon>
            </InputGroup>
            {
              !token ? (
                <Button
                  color="secondary"
                  style={{margin:'0 5px'}}
                  onClick={this.onLoginClick}>Login</Button>
              ) : (
                <UncontrolledDropdown
                  style={{margin:'0 5px'}}
                  >
                  <DropdownToggle caret>
                    Hello
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Shopping History</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.onLogoutClick.bind(this)}>Logout</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )
            }

            <Link to={`/cart`}>
              <Button color="secondary">Shopping Cart</Button>{' '}
            </Link>
          </Container>
        </Navbar>
      </div>
    );
  }
}

Menu.propTypes = {
  toggleLogin: PropTypes.func.isRequired,
  userLogout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  item: state.item,
  account: state.account
})
export default connect(mapStateToProps, { toggleLogin, userLogout })(Menu);
