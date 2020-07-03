import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Alert, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { useToasts } from 'react-toast-notifications'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Icon from './Icon';
import { faTwitter, faFacebook, faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const shareOptions = [
    {
        name: 'Facebook',
        icon: faFacebook ,
        link: 'http://facebook.com/#',
    },
    {
        name: 'Twitter',
        icon: faTwitter,
        link: '#',
    },
    {
        name: 'WhatsApp',
        icon: faWhatsapp,
        link: '#',
    },
    {
        name: 'Instagram',
        icon: faInstagram,
        link: '#',
    },
    {
        name: 'LinkedIn',
        icon: faLinkedin,
        link: '#',
    },
]

const JoinModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const { addToast } = useToasts()

  const handleCopy = () => {
    setModal(false);
    addToast('Link copied successfully!', {
        appearance: 'success',
        autoDismiss: true,
      })
  }

  return (
    <div>
        <Button color="danger" block onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
            <h3>Join this Activity</h3>
        </ModalHeader>
        <ModalBody>
        <small style={{fontSize: 10 }}>Your name will be used by your host to identify you and We'll use your email address to send you details of the activity</small>
        <br/><br/>
            <Form action="/success" method="get">
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="exampleEmail">First name *</Label>
                        <Input type="email" name="email" id="exampleEmail" />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="examplePassword">Last name *</Label>
                        <Input type="password" name="password" id="examplePassword" />
                    </FormGroup>
                    </Col>
                </Row>     
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="exampleEmail">Email *</Label>
                        <Input type="email" name="email" id="exampleEmail" />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="examplePassword">Mobile Number (optional)</Label>
                        <Input type="password" name="password" id="examplePassword" />
                    </FormGroup>
                    </Col>
                </Row>   
                <Button block  type="submit" color="danger">Join Activity</Button>
            </Form>  
            


        </ModalBody>
        <ModalFooter>
            <Alert color="danger">
                <h4 style={{fontWeight: 'normal'}}>Note</h4>
                <p>By clicking "Join Activity", I accept the <a href="#">Terms of Service</a> and have read the <a href="#">Privacy Policy</a>. I agree that Hoplist may <a href="#">share my information</a> with the Host.</p>
            </Alert>

        </ModalFooter>
      </Modal>
    </div>
  );
}

export default JoinModal;