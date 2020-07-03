import Head from 'next/head'
import { Container } from 'reactstrap'
import Navbar from './Navbar'

const Layout = (props) => (
  <div>
    <Head>
      <title>Hoplist</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>      
      <script src="https://rave-api-v2.herokuapp.com/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>
    </Head>
    <div style={{marginBottom: 20}}>
      <Navbar />

    </div>
    
    <Container>
      {props.children}
    </Container>
  </div>
)

export default Layout