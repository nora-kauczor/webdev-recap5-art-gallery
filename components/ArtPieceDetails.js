import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtPieceDetails({
  currentArtPiece,
  favoriteArtPieceSlugs,
  onFavoriteButton,
}) {
  const { imageSource, name, artist, year, genre, dimensions } =
    currentArtPiece;
  const reducedHeight = dimensions.height * 0.5;
  const reducedWidth = dimensions.width * 0.5;

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <h2>{name}</h2>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <Image
        src={imageSource}
        alt={`Art ${name} by Artist ${artist}`}
        height={reducedHeight}
        width={reducedWidth}
      />
      <FavoriteButton
        artPiece={currentArtPiece}
        favoriteArtPieceSlugs={favoriteArtPieceSlugs}
        onFavoriteButton={onFavoriteButton}
      />
      <Link href={"/art-pieces/."}>Back to Art Pieces Overview</Link>
    </>
  );
}
