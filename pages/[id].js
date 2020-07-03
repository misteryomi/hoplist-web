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
import ShieldCheckIcon from 'mdi-react/ShieldCheckIcon';
import moment from 'moment';

export default function Home({data}) {

  const handleClosePayment = () => {
    console.log("Payment closed");
  }


  if(!data.status) {
    return (<div>Eroor</div> )
  }

  const activity = data.data;
  return (
    <div className="activity-details">
      {activity.images.length > 0 && (
        <div className="activity-image" style={{backgroundImage: "url('"+ activity.images[0]+"')"}}></div>
      )}

        <Row>
          <Col>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <div style={{width: 20, height: 20, marginRight: 20}}>
                <Icon icon={faHeart} fixedWidth={false}/>
              </div>
              <div style={{width: 20, height: 20}}>
                <Icon icon={faCommentAlt}  fixedWidth={false} size='xs'/>
              </div>
            </div>
          </Col>
          <Col>
            <div className="text-right">
              <ShareModal buttonLabel={(
                <div>
                  Share {' '} <Icon style={{marginLeft: 5}} icon={faShareAlt} />
                </div>
              )} 
              url={`https://www.hoplist.co/activity/${data._id}`}
              />
            </div>
          </Col>
        </Row>
        <hr/>
        <h1 className="activity-title">{activity.title}</h1>
        <p>{activity.description}</p>
        <hr/>
              
        <Row>
          <Col md={2}>
              <Alert color="success" className="inline">
                <Icon icon={faCalendar} />
                <div className="ml-3">
                  Date
                  <h3>{moment(activity.dateTime).format('DD MMM')}</h3>
                </div>
              </Alert>
          
          </Col>
          <Col md={8} />
          <Col md={2}>
            <div className="text-right" >
              <Alert color="success" className="inline">
                <Icon icon={faClock} />
                <div className="ml-3">
                  Time
                  <h3>{moment(activity.dateTime).format('hh:mma')}</h3>
                </div>
              </Alert>
            </div>
          </Col>
        </Row>   

        <hr/>
        <Row>
          <Col><span style={{fontSize: 15}}>Location</span></Col>
          <Col>
            <div className="text-right" >
             <h3><Icon icon={faMapMarkerAlt } /> Not set</h3>
            </div>
          </Col>
        </Row>   

        <br/>
        <Alert color="success">
          <Row>
            <Col sm={1}>
              <div className="notice-shield">
                <div style={{width: 40, height: 40}}>
                  {/* <ShieldCheckIcon size={16} /> */}
                  <Icon icon={faShieldAlt} size="4.5em" fixedWidth={false} color="#fff" />
                </div>
              </div>
            </Col>
            <Col className="justify-center">
              You can only view the exact location and/or link when you join the activity. Your host will be notified of your attendance.
            </Col>
          </Row>
        </Alert>

        <hr/>

        <h3>Your Host</h3>

        <Row>
          <Col sm={2}>
             <Avatar color="#FC4A1A" src={activity.user.profileImage} round name={`${activity.user.firstName} ${activity.user.lastName}`}  />
          </Col>
          <Col>            
          <br/>
            <h3>{`${activity.user.firstName} ${activity.user.lastName}`}</h3>
            <span className="text-gray">Creator</span>
          </Col>
        </Row>  

        <br/>

        <p>{activity.user.description}</p> 
        <Row>
          <Col md={3}>
            <Button outline color="danger" block>Follow</Button>
          </Col>
        </Row>
        {/* <Rave
          pay_button_text="Join activity"
          className="btn btn-success"
          metadata={[
            { metaname: 'Tickets', metavalue: 4 },
            // { metaname: 'Hostel', metavalue: this.state.hostel },
            // { metaname: 'Room', metavalue: this.state.room_number }
          ]}
          payment_method="card"
          customer_email="yomiomotoso@gmail.com"
          customer_phone="08163904277"
          amount={"" + 200 * 5 + ""}
          ravePubKey="FLWPUBK_TEST-05f5a3f5af15ba9da55f47ed4ecb07c5-X"
          // callback={this.callback}
          onclose={handleClosePayment}
        /> */}

        <div className="footer">
            <h2>Try something new with your community today</h2>
            <p>Download the App</p>

            <DownloadBtns inverse />
        </div>

        <div style={{height: 100}}></div>
        <div className="fixed-footer">
          <Container>
            <Row>
              <Col md={8}>
                Price <br/>
                <h3>Free</h3>
              </Col>
              <Col md={4}>
                <div  className="text-right">

                    <JoinModal buttonLabel="Join Activity" />
                  
                </div>
              </Col>
            </Row>     
          </Container>
        </div>
     </div>
  )
}

export async function getStaticProps(ctx) {
  const res = await fetch(`http://localhost:3001/activities/${ctx.params.id}`)
  const json = await res.json();
  return { props: {data: json} }

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:3001/activities')
  const activities = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = activities.data.map((activity) => ({
    params: { id: activity._id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
