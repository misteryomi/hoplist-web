import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Alert, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { useToasts } from 'react-toast-notifications'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Icon from './Icon';
import { faTwitter, faFacebook, faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Router from 'next/router';
import axios from '../utils/axios';

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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const toggle = () => setModal(!modal);
  const { addToast } = useToasts()

  const handleCopy = () => {
    setModal(false);
    addToast('Link copied successfully!', {
        appearance: 'success',
        autoDismiss: true,
      })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const data = {
        firstName,
        lastName,
        email,
        phone,
        activityId: props.activity_id,
    }

    try {
        const response = await axios.post('/tickets', data);

        setLoading(false);
        console.log({response});
        setModal(false);
        addToast('Hooray! Successful!!', {
            appearance: 'success',
            autoDismiss: true,
        });

        setTimeout(() => {
            Router.push(`/success?ticket=${response.data.data.ticket_id}`);
        })

    } catch(e) {
        setLoading(false);
        console.log(e);
    }

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
            <Form action="#" method="post" onSubmit={handleSubmit}>
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="email">First name *</Label>
                        <Input type="text" name="first_name" id="email" onChange={(e) => setFirstName(e.target.value)} />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="lastName">Last name *</Label>
                        <Input type="text" name="last_name" id="lastName" onChange={(e) => setLastName(e.target.value)} />
                    </FormGroup>
                    </Col>
                </Row>     
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="email">Email *</Label>
                        <Input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="phone">Mobile Number (optional)</Label>
                        <Input type="text" name="phone" id="phone"  onChange={(e) => setPhone(e.target.value)}/>
                    </FormGroup>
                    </Col>
                </Row>   
                <Button disabled={loading} block  type="submit" color="danger">{loading ? <i className="fa fa-spin fa-spinner"></i> : 'Join Activity'}</Button>
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