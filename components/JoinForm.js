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

const JoinForm = (props) => {
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
  const [error, setError] = useState(null);

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

    setError(null);
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
        setError(e.response ? e.response.data.message : 'An error occured. Please try again')
        console.log({e});
    }

  }

  return (
    <div class="form-bg">
        <h3>Join this Activity</h3>
        <div>
        <small style={{fontSize: 10 }}>Your name will be used by your host to identify you and We'll use your email address to send you details of the activity</small>
        <br/><br/>

          {error && <><Alert color="warning">{error}</Alert><br/></>}
            <Form action="#" method="post" onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="email">First name *</Label>
                        <Input type="text" required name="first_name" id="email" onChange={(e) => setFirstName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last name *</Label>
                        <Input type="text" required name="last_name" id="lastName" onChange={(e) => setLastName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email *</Label>
                        <Input type="email" required name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">Mobile Number (optional)</Label>
                        <Input type="text" name="phone" id="phone"  onChange={(e) => setPhone(e.target.value)}/>
                    </FormGroup>
                <Button disabled={loading} block  type="submit" color="danger">{loading ? <i className="fa fa-spin fa-spinner"></i> : 'Join Activity'}</Button>
            </Form>  
            


        </div>
        <div style={{marginTop: 20}}>
            <Alert color="danger">
                <h4 style={{fontWeight: 'normal'}}>Note</h4>
                <p>By clicking "Join Activity", I accept the Terms of Service and have read the <a href="https://hoplihttps://hoplist.co/privacy.htmlst.co/privacy.html">Privacy Policy</a>. I agree that Hoplist may share my information with the Host.</p>
            </Alert>
        </div>

    </div>
  );
}

export default JoinForm;