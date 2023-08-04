import Head from 'next/head'
import Menu from '@/componentes/menu'
import SobreC from '@/componentes/sobre'




export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre</title>
        <meta name="description" content="next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >

     <Menu/>

    <SobreC/>

      </main>
    </>
  )
}
