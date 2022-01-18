import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql",
  cache: new InMemoryCache(),
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    typography: {
      fontFamily: "QuickSand",
      fontWeightLight: 100,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <div className="general">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
