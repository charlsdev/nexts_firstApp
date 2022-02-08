import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

import "../public/bootswatch/bootstrap.min.css";
import "../public/eggyJS/css/eggy.css";
import "../public/eggyJS/css/progressbar.css";
import "../public/eggyJS/css/theme.css";
import "../public/css/coloresTonos.min.css";
import "../public/css/scrollDesing.min.css";
import "../public/css/loader.min.css";
import "../public/css/style.min.css";

function MyApp({ Component, pageProps }) {
   return (
      <ApolloProvider client={client}>
         <Component {...pageProps} />
      </ApolloProvider>
   );
}

export default MyApp;