import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useState } from "react";
import { uid } from "uid";

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

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  // const initalArtPiecesInfo = data.map((artPiece) => {const isFavorite = false; return {...artPiece, isFavorite,  key: uid()}});
  // const [artPiecesInfo, setArtPiecesInfo] = useState(initalArtPiecesInfo);

  // function handleChangeArtPiecesInfo (artPieceToChange) {
  //   const index = artPiecesInfo.findIndex((artPiece) => artPiece.id === artPieceToChange.id);
  //   setArtPiecesInfo((artPiecesInfo) => {artPiecesInfo[index].isFavorite = !artPiecesInfo[index].isFavorite; return artPiecesInfo});};

  if (isLoading) {
    return <div>Is Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} artPieces={data} />
        </Layout>
      </SWRConfig>
    </>
  );
}
