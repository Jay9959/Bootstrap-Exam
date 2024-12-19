import React from 'react';
import { useState } from 'react';
import { Button, Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { FaRegHeart, FaRegUser, FaSearch } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';


const Header1 = () => {
    const [show, setShow] = useState(false);

    return (
        <Container>
            <InputGroup className="my-4 ">
                <img src="/public/logo.png" className='me-5 w-0' alt="" />
                <Form.Control aria-label="Text input with dropdown button" />

                <DropdownButton
                    variant="outline-secondary"
                    title="All Categories"
                    id="input-group-dropdown-2"
                    align="center"
                >
                    <Dropdown.Item href="#">Mens</Dropdown.Item>
                    <Dropdown.Item href="#">Womens</Dropdown.Item>
                    <Dropdown.Item href="#">Electronics</Dropdown.Item>
                </DropdownButton>
                <Button className='me-5'><FaSearch className='align-items-center text-center' /></Button>
                <div className="me-2">
                    <FaRegUser />
                    <DropdownButton
                        variant="bg-transparent"
                        title="Account"
                        id="input-group-dropdown-2"
                        align="center"
                        className='fs-bold'
                    >
                        <Dropdown.Item href="#">Register</Dropdown.Item>
                        <Dropdown.Item href="#">Checkout</Dropdown.Item>
                        <Dropdown.Item href="#">Login</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="me-2">
                    <FaRegHeart />
                    <DropdownButton
                        variant="bg-transparent"
                        title="Wishlist"
                        id="input-group-dropdown-2"
                        align="center"
                        className='fs-bold'
                    >
                        <Dropdown.Item href="#">Register</Dropdown.Item>
                        <Dropdown.Item href="#">Checkout</Dropdown.Item>
                        <Dropdown.Item href="#">Login</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="me-2">
                    <MdOutlineShoppingCart />
                    <DropdownButton
                        variant="bg-transparent"
                        title="Cart"
                        id="input-group-dropdown-2"
                        align="center"
                        className='fs-bold'
                    >
                        <Dropdown.Item href="#">Register</Dropdown.Item>
                        <Dropdown.Item href="#">Checkout</Dropdown.Item>
                        <Dropdown.Item href="#">Login</Dropdown.Item>
                    </DropdownButton>
                </div>
            </InputGroup>
        </Container >

    );
}

export default Header1;