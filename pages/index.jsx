import Head from 'next/head'
import Carousel from '@/components/carousel/Carousel'
import Card from '@/components/destino/Card'
import { useEffect, useState } from 'react'
import axios from "axios";

export default function Home() {

  const [destinos, setDestinos] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:8080/destinos")
      .then((response) => {
        setDestinos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de destinos: ", error);
      });
  }, []);


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
        <title>Destino Certo - Home</title>

      </Head>

      <Carousel />

      <main>
        
        <h1 className="display-4 font-weight-normal text-center">
          Voos com até 50% de desconto!
        </h1>
        
        <div className="album py-5 bg-light">
          <div className="container">
            
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            
              {destinos.map((destino, i) => (

                <Card  key={i} destino={destino} />

              ))}

            </div>
          </div>
        </div>
      </main>

    </>
  )
}
