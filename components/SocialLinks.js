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
        link: 'https://www.facebook.com/hoplistHQ',
    },
    {
        name: 'Twitter',
        icon: faTwitter,
        link: 'https://twitter.com/hoplistHQ',
    },

    {
        name: 'Instagram',
        icon: faInstagram,
        link: 'https://www.instagram.com/hoplistHQ',
    },
]

const SocialLinks = () => {
  
  return (
    <div style={{marginLeft: 10,}}>
            <Row style={{ justifyContent: 'space-between', flex: 1}}>
                {/* <Col md={1} /> */}
            {
                shareOptions.map((option, index) => 
                    <Col md={2} key={index}>
                        <a href={`${option.url}`} target="_blank" class="social-share">
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

export default SocialLinks;