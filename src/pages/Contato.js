import Head from 'next/head'
import Menu from '@/componentes/menu'

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato</title>
        <meta name="description" content="next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >

     <Menu/>

     <section class="contact">
        <div class="maxWidth">
            <h2 class="title">Contato</h2>
            <div class="contactContent">


              </div>
              </div>
              </section>
      </main>
    </>
  )
}
