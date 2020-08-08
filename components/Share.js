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
        link: 'https://www.facebook.com/sharer.php?u=',
    },
    {
        name: 'Twitter',
        icon: faTwitter,
        link: 'https://twitter.com/share?url=',
    },
    {
        name: 'WhatsApp',
        icon: faWhatsapp,
        link: "https://api.whatsapp.com/send?text=",
    },
    {
        name: 'Instagram',
        icon: faInstagram,
        link: 'https://www.facebook.com/sharer.php?u=',
    },
    {
        name: 'LinkedIn',
        icon: faLinkedin,
        link: 'https://www.linkedin.com/shareArticle?url=',
    },
]

const Share = (props) => {
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
    <div style={{marginLeft: 10}}>
            <Row>
                {/* <Col md={1} /> */}
            {
                shareOptions.map((option, index) => 
                    <Col md={1} className={props.nocap ? "ml-3" : "ml-2"} key={index}>
                        <a href={`${option.link}${props.url}`} target="_blank" class="social-share">
                            <div class="social-share-icon">
                                <div class="icon-container">
                                    <Icon icon={option.icon} fixedWidth={false} />                                    
                                </div>
                            </div>
                         {/* {option.name} */}
                        </a>
                    </Col>
                )
            }
            </Row>

    </div>
  );
}

export default Share;