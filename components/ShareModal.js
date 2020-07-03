import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Alert, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { useToasts } from 'react-toast-notifications'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Icon from './Icon';
import Share from './Share';
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

const ShareModal = (props) => {
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
      <Button color="light" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
            <h3>Share this Activity</h3>
        </ModalHeader>
        <ModalBody>

            <Share url={props.url} />

        </ModalBody>
        <ModalFooter>
            <Alert color="danger">
                <h4 style={{fontWeight: 'normal'}}>Sharing Tip</h4>
                <p>You can copy and paste the link anywhere (Slack, LinkedIn, Snapchat, Telegram etc.)</p>
            </Alert>

        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ShareModal;