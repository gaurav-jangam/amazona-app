import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import './Header.css';
import { Container, Form, FormControl, Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function App() {
  return (
	  <BrowserRouter>
     <div className="app">
     <div className="Navbar">
       <Navbar bg="" expand="lg" >
  <Navbar.Brand href="#home" style={{ fontWeight:'900' }} className="text-white">E-BOOK</Navbar.Brand>
  <Button className="ml-auto hide-on-mobile" variant="outline-light"><ShoppingCartIcon/><span>2</span></Button>
  <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
  <Navbar.Collapse  id="basic-navbar-nav">
    <Nav className="ml-auto">
      <NavDropdown style={{ fontWeight:'900' }} title="Home" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline className="mr-auto hide-on-laptop">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light"><SearchIcon/></Button>
    </Form>
  </Navbar.Collapse>
  <Button variant="outline-light" className="hide-on-laptop" ><ShoppingCartIcon/><span>2</span></Button>
</Navbar>
        </div>  
       
			<main>
<Route path="/product/:id" component={ProductScreen}></Route>
<Route path="/" component={HomeScreen} exact></Route>
</main>
		</div>
	</BrowserRouter>
  );
}
export default App;