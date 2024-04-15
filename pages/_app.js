import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";

export default function App({ Component, pageProps }) {
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      const error = new Error("An error occurred while trying to fetch.");
      error.info = await response.json();
      error.status = response.status;
      throw error;
    }
    return response.json();
  };

  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} artPieces={data} />
        <Layout></Layout>
        {isLoading && <div>Is Loading...</div>}
        {error && <div>Oops! Something went wrong.</div>}
      </SWRConfig>
    </>
  );
}
