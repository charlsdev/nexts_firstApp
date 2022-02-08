import Head from "next/head";
import Script from "next/script";
import Navigation from './navigations';

const Container = (props) => (
   <div>
      <Head>
         <meta charset="UTF-8"/>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         <meta name="theme-color" content="#188ae2"/>
         <meta name="author" content="Carlos VP (CharlsDEV)"/>
         <meta name="copyright" content="Copyright (c) 2021 - InnovaTech´S"/>
         <meta name="description" content="Pagina para registro de boletos."/>
         <meta name="keywords" content="BiingSOL, Bingo Solidario, Educacion Online"/>

         <title>BiingSOL - NextJS</title>

         <link rel="shortcut icon" href="/img/BiingSIO.ico" type="image/x-icon" />

      </Head>
      
      <Navigation/>

      <div className="container">
         {props.children}
      </div>

      <div className="footer">
         Creado por <b>CharlsDEV</b> || © Todos los derechos reservados.
      </div>

      <Script id="JQuery" src="/JQuery/jquery.min.js" strategy="beforeInteractive" ></Script>
      <Script id="EggyJS" src="/eggyJS/js/eggy.js" strategy="beforeInteractive" ></Script>
      <Script id="MainJS" src="/js/main.min.js" strategy="beforeInteractive" ></Script>

   </div>
)

export default Container;