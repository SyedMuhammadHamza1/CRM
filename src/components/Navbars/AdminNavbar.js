import React , {Component} from "react";
import { Link } from "react-router-dom";
// import { connect } from 'react-redux';
import firebase from 'firebase'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import history from '../../history';
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";
// import { updateUserName } from "../../store/actions/actions";
class AdminNavbar extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
}   
  signOut(){
    
    let that =this;
        firebase.auth().signOut().then(function () {
            // dispatch({ type: "SHOW_PROGRESS_BAR", payload: false })
            // dispatch({ type: "IS_LOGIN", payload: false })
            // Sign-out successful.
            // history.push('/signin');
            console.log("sign out successfully")
            // console.log(this.props.updateUserName)
            // that.props.history.push('/auth/login');
        }, function (error) {
            // An error happened.
        });
    }
  render() {
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/admin/index"
            >
            <img
                        alt="..."
                        src={require("../../assets/img/icons/crm.png")}
                        className = "img-styling"
                       style = {{height: '5em' }}

                      />
            </Link>
          
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                  
                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">
                      <i className="ni ni-single-02" />
                      </span>
                      <span>
                    <span>      </span>
                    Admin
                      </span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                
                  <DropdownItem href="/auth/login" onClick={() => {this.signOut()}}>
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

// export default connect(mapStateToProp, mapDispatchToProp)(AdminNavbar);
export default AdminNavbar;