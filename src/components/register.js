import React, { useState } from 'react';

import { Button, Modal, Form, Input, Label, FormGroup, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const Register = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    
    return (
        <div>
            <Button color="secondary" onClick={toggle}>Register</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader >Enter your username and password</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Username</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter  username" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Enter password" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter a valid email" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={toggle}>Register</Button>
                    {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default Register;