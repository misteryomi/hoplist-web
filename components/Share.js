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
    <div>
            <Row>
                <Col md={1} />
            {
                shareOptions.map((option, index) => 
                    <Col md={2} key={index}>
                        <a href={`${option.link}${props.url}`} target="_blank" class="social-share">
                            <div class="social-share-icon">
                                <div class="icon-container">
                                    <Icon icon={option.icon} fixedWidth={false} />                                    
                                </div>
                            </div>
                         {option.name}
                        </a>
                    </Col>
                )
            }
            </Row>
            <hr/>
            <h4 className="text-left">Copy Link</h4>
            <Form inline >
                <FormGroup style={{width: '80%'}} >
                    <Input type="text" style={{width: '100%'}}  name="password" id="link" placeholder={props.url} disabled/>
                </FormGroup>
                {' '}
                {/* <Toast title="Copy" content="Link copied to clipboard"/> */}
                <CopyToClipboard text={props.url} onCopy={handleCopy}>
                <Button color="dark">
                    Copy
                </Button>
                </CopyToClipboard>
            </Form>

            <hr/>
    </div>
  );
}

export default Share;