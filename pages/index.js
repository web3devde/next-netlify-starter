import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import mintingPic from '../public/minting_info.gif'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
	 <Image
        src={mintingPic}
        alt="Minting Info"
        layout = "fill"
	// width={500} automatically provided
        //height={100vh} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      </main>

    </div>
  )
}
