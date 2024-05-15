import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meu Site</title>
        <meta name="description" content="Bem-vindo ao meu site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  )
}

const Header = () => {
  return (
    <header style={{backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center'}}>
      <h1>Meu Site</h1>
    </header>
  );
}

const Hero = () => {
  return (
    <div style={{backgroundImage: 'url(sua-imagem-aqui)', height: '50vh', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <h2 style={{color: '#fff'}}>Bem-vindo ao meu site</h2>
    </div>
  );
}

const Main = () => {
  return (
    <main style={{margin: '20px'}}>
      <h2>Sobre mim</h2>
      <p>Este é um exemplo de um layout semelhante ao site que você mencionou.</p>
    </main>
  );
}

const Footer = () => {
  return (
    <footer style={{backgroundColor: '#f8f9fa', textAlign: 'center', padding: '10px', position: 'fixed', bottom: '0', width: '100%'}}>
      <p>Contato: meuemail@exemplo.com</p>
    </footer>
  );
}
