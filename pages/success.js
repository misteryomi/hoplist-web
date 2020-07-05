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
import axios from '../utils/axios';


function Success({data, query}) {

  
  if(!data.status) {
    return (<div>An error occured</div> )
  }
  const ticket = data.data;

  return (
    <div className="text-center">


        <img src="/static/images/hooray.png" style={{width: 150}} />

        <Row className="mt-4">
          <Col md="8" className="mx-auto">
            <h3>Hooray! Successful!!</h3>

            <p>You've successfully joined <strong>{ticket.activity.title}</strong>, the details of the activity has been sent to <strong>{ticket.email}</strong></p>

            <p>You can share this activity for your friends on</p>


            <Share url={`https://www.hoplist.co/activity/${ticket.activityId}`} />
          </Col>
        </Row>


     </div>
  )
}

Success.getInitialProps = async ({query}) => {
  const res = await axios(`/tickets/${query.ticket}`)
  const json = await res.data
  return { data: json, query }
}

export default Success