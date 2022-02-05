import Head from "next/head";
import Navigation from './navigations';

const Container = (props) => (
   <div>
      <Head>
         <meta charset="UTF-8"/>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         <meta name="theme-color" content="#00b09b"/>
         <meta name="author" content="Carlos VP (CharlsDEV)"/>
         <meta name="copyright" content="Copyright (c) 2021 - InnovaTech´S"/>
         <meta name="description" content="Pagina para registro de boletos."/>
         <meta name="keywords" content="BiingSOL, Bingo Solidario, Educacion Online"/>

         <title>BiingSOL - NextJS</title>

         <link rel="shortcut icon" href="/img/BiingSIO.ico" type="image/x-icon" />

         <link rel="stylesheet" href="/bootswatch/bootstrap.min.css" />
         <link rel="stylesheet" href="/eggyJS/css/eggy.css" type="text/css" />
         <link rel="stylesheet" href="/eggyJS/css/progressbar.css" type="text/css" />
         <link rel="stylesheet" href="/eggyJS/css/theme.css" type="text/css" />
         
         <link rel="stylesheet" href="/css/coloresTonos.min.css" type="text/css" />
         <link rel="stylesheet" href="/css/style.min.css" type="text/css" />
      </Head>
      
      <Navigation/>

      <div className="container">
         {props.children}
      </div>

      <div className="footer">
         Creado por <b>CharlsDEV</b> || © Todos los derechos reservados.
      </div>

      <script src="/JQuery/jquery.min.js"></script>
      <script src="/eggyJS/js/eggy.js"></script>
      <script src="/js/main.min.js"></script>
   </div>
)

export default Container;