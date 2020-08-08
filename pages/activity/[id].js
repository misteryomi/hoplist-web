import Head from 'next/head'
import { Container, Row, Col, Button, Alert } from 'reactstrap';
import { faHeart, faCommentAlt, faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { faShare, faShareAlt, faShieldAlt, faShieldVirus, faSearchLocation, faMapMarked, faMapMarkedAlt, faMapPin, faMapMarker, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../components/Icon';
import ShareModal from '../../components/ShareModal';
import DownloadBtns from '../../components/DownloadBtns';
import Avatar from 'react-avatar';
import Rave from 'react-flutterwave-rave'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import JoinForm from '../../components/JoinForm';
import ShieldCheckIcon from 'mdi-react/ShieldCheckIcon';
import moment from 'moment';
import axios from '../../utils/axios';
import Share from '../../components/Share';
import SocialLinks from '../../components/SocialLinks';

export default function Home({data}) {


  console.log({data})




  if(!data.status) {
    return (<div>An error occured</div> )
  }

  const activity = data.data;
  return (
    <div className="activity-details">
      {activity.images.length > 0 && (
        <div className="activity-image" style={{backgroundImage: "url('"+ activity.images[0]+"')"}}></div>
      )}

        <h4 class="mt-4">You are invited to join</h4>
        <h1 className="activity-title mb-4">{activity.title}</h1>

        <Row>
           <Col md={6}>
              <div class="date-time">
                <Icon icon={faCalendar} /> &nbsp; &nbsp; {moment(activity.dateTime).format('dddd DD MMM, HH:MM a')}
              </div><br/>
              <hr/>
              <h4>About this activity</h4>
              <p>{activity.description}</p>

              <br/><br/>
              <Row>
                <Col md={2}>
                  <Avatar size="80" color="#FC4A1A" src={activity.user.profileImage} round name={`${activity.user.firstName} ${activity.user.lastName}`}  />
                </Col>
                <Col md="1"/>
                <Col>            
                <br/>
                  <h3>{`${activity.user.firstName} ${activity.user.lastName}`}</h3>
                  <span className="text-gray">Creator</span>
                </Col>
              </Row>  

              <hr/>

              <h4>Share with friends</h4>
              <p>You can share this activity with your friends via:</p>

              <Share url="#" />
            </Col>
           <Col md={6}> 
              <JoinForm activity_id={activity._id} />
            </Col>
        </Row>
        <hr/>



        

        <div className="footer">
            <h2>Try something new with your community today</h2>
            <p>Download the App</p>

            <DownloadBtns inverse />

        </div>

        <div class="m-4">

            <Row>
              <Col md="10">
                <a href="/privacy" className="text-dark mr-3">Privacy</a>
                <a href="/terms" className="text-dark">Terms of use</a>
              </Col>
              <Col md="2">
                  <SocialLinks />
              </Col>
            </Row>

        </div>

     </div>
  )
}

export async function getStaticProps(ctx) {
  const res = await axios(`/activities/${ctx.params.id}`)
  const json = await res.data;

  return { props: {data: json} }
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await axios('/activities')
  const activities = await res.data.data

  console.log(res);
  // Get the paths we want to pre-render based on posts
  const paths = activities.length > 0 && activities.map((activity) => ({
    params: { id: activity._id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
