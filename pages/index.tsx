import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { makeStyles} from '@material-ui/core/styles'
//import {UserContext} from '../src/components/lib/userContext';
import ListProduct from '../src/components/ListProduct'
import ListChannel from './../src/components/Channel'
import { Button } from '@material-ui/core';
import {IProduct,IChannel} from './../src/types'
import api from './../src/lib/auth'
interface IChannelIndex {
  channels:IChannel
}

const useStyles = makeStyles(theme=>({}))

const Home = (props:IChannelIndex) => {
  const classes = useStyles();
  return (
    <div>
      <div className="mtop">
      {/* <style jsx>{`
        .mtop {
          background-color: red;
          padding:10px;
          width: 400px;
        }
      `}</style> */}
      {/* <Button variant="contained" color="secondary">Product</Button>
      <Button variant="contained" color="primary" href="/Product">Add Product</Button> */}
      </div>
      {/* <ListProduct products={props.products}></ListProduct> */}
      <ListChannel channels={props.channels}></ListChannel>
    </div>
  )
  // return (
  //   <div className={styles.container}>
  //     <Head>
  //       <title>Create Next App</title>
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>

  //     <main className={styles.main}>
  //       <h1 className={styles.title}>
  //         Welcome to <a href="https://nextjs.org">Next.js!</a>
  //       </h1>

  //       <p className={styles.description}>
  //         Get started by editing{' '}
  //         <code className={styles.code}>pages/index.tsx</code>
  //       </p>

  //       <div className={styles.grid}>
  //         <a href="https://nextjs.org/docs" className={styles.card}>
  //           <h3>Documentation &rarr;</h3>
  //           <p>Find in-depth information about Next.js features and API.</p>
  //         </a>

  //         <a href="https://nextjs.org/learn" className={styles.card}>
  //           <h3>Learn &rarr;</h3>
  //           <p>Learn about Next.js in an interactive course with quizzes!</p>
  //         </a>

  //         <a
  //           href="https://github.com/vercel/next.js/tree/master/examples"
  //           className={styles.card}
  //         >
  //           <h3>Examples &rarr;</h3>
  //           <p>Discover and deploy boilerplate example Next.js projects.</p>
  //         </a>

  //         <a
  //           href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //           className={styles.card}
  //         >
  //           <h3>Deploy &rarr;</h3>
  //           <p>
  //             Instantly deploy your Next.js site to a public URL with Vercel.
  //           </p>
  //         </a>
  //       </div>
  //     </main>

  //     <footer className={styles.footer}>
  //       <a
  //         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Powered by{' '}
  //         <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
  //       </a>
  //     </footer>
  //   </div>
    
  // )
 
}

Home.getInitialProps =  async ()=>{
 //const channel = api.get('https://chafido.bondril13.dev/channel')
 //console.log(product)
 //console.log(api.defaults.headers)
  return {
    channels:api.get('https://chafido.bondril13.dev/channel')
    // channels: [
    //   {channel_id: '0000',channel_name: 'test',line: 'line_0000',facebook: 'f0000'},
    //   {channel_id: '0001',channel_name: 'test1',line:'line_0001',facebook: 'f0001'}

    // ]
  }
}

export default Home