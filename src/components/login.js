import React, { useState } from 'react';
import GoogleLogin from 'react-google-login'
import '../css/buttons.css'
import { Button, Modal,Form,Input,Label,FormGroup,ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Login = (props) => {
    const { buttonLabel, className } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const responseGoogle =(response)=>{
        // var profile = response.getBasicProfile();
        // console.log('Email: ' + profile.getEmail()); 
        console.log(response);
        // console.log(response.profileObj);
    };
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
                    <GoogleLogin 
                        clientId="129471130344-60ilg7c9366ndmfpdva16eoie1t4d5m0.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        onClick={toggle}
                    />
                    <Button color="success"  onClick={toggle}>Login</Button>
                    {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Login;