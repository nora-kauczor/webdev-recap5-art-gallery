import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";

import { uid } from "uid";
import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

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

  const [favoriteArtPieceSlugs, setFavoriteArtPieceSlugs] =
    useLocalStorageState("slug", {
      defaultValue: [],
    });

  function checkIfArtPieceIsFavorite(slug) {
    return favoriteArtPieceSlugs.includes(slug);
  }

  function addArtPieceToFavorites(slug) {
    setFavoriteArtPieceSlugs([slug, ...favoriteArtPieceSlugs]);
  }
  function removeArtPieceFromFavorites(slug) {
    setFavoriteArtPieceSlugs(() => {
      const favoriteArtPiecesSlugsWithoutCertainSlug =
        favoriteArtPieceSlugs.filter((item) => item !== slug);
      return favoriteArtPiecesSlugsWithoutCertainSlug;
    });
  }

  function handleFavoriteButton(artPiece) {
    const slug = artPiece.slug;
    checkIfArtPieceIsFavorite(slug)
      ? removeArtPieceFromFavorites(slug)
      : addArtPieceToFavorites(slug);
  }

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
          <Component
            {...pageProps}
            artPieces={data}
            onFavoriteButton={handleFavoriteButton}
            favoriteArtPieceSlugs={favoriteArtPieceSlugs}
            error={error}
            isLoading={isLoading}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}
