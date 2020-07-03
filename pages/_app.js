// import App from 'next/app'

import Layout from "../components/Layout"
import { ToastProvider } from 'react-toast-notifications';


import '../theme/style.scss';
import ToastDisplay from "../components/Toast";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <ToastProvider
            autoDismiss
            autoDismissTimeout={3000}
            // components={{ Toast: ToastDisplay }}
            placement="top-center"
            >
             <Component {...pageProps} />
            </ToastProvider>
        </Layout>
    )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp