import React, { useState } from 'react';
import { Button, Modal,Form,Input,Label,FormGroup,ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Login = (props) => {
    const { buttonLabel, className } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="warning" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader >Enter your username and password</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter a valid email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Enter password" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={toggle}>Login</Button>
                    {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Login;