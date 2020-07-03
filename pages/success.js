import Head from 'next/head'
import { Container, Row, Col, Button, Alert } from 'reactstrap';
import { faHeart, faCommentAlt, faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { faShare, faShareAlt, faShieldAlt, faShieldVirus, faSearchLocation, faMapMarked, faMapMarkedAlt, faMapPin, faMapMarker, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Icon from '../components/Icon';
import ShareModal from '../components/ShareModal';
import DownloadBtns from '../components/DownloadBtns';
import Avatar from 'react-avatar';
import Rave from 'react-flutterwave-rave'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import JoinModal from '../components/JoinModal';
import Share from '../components/Share';


export default function Success() {


  return (
    <div className="text-center">


        <img src="/static/images/hooray.png" style={{width: 150}} />

        <Row className="mt-4">
          <Col md="8" className="mx-auto">
            <h3>Hooray! Successful!!</h3>

            <p>You've successfully joined <strong>Roll and enjoy an Italian mainstay with a multi-generational local family</strong>, the details of the activity has been sent to <strong>Harrylekan@gmail.com</strong></p>

            <p>You can share this activity for your friends on</p>


            <Share />
          </Col>
        </Row>


     </div>
  )
}
