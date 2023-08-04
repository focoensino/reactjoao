import Head from 'next/head'
import Menu from '@/componentes/menu'
import HomeTop from '@/componentes/homeTop'
import HomeServis from '@/componentes/homeServis'
import HomePremium from '@/componentes/homePremium'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
     <Menu/>
     <HomeTop/>
     <HomeServis/>
     <HomePremium/>
      </main>
    </>
  )
}
