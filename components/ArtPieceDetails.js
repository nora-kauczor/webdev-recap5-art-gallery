import Link from "next/link";

export default function ArtPieceDetails({ currentArtPiece }) {
  const router = useRouter;
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
      <Link href={"/art-pieces/."}>Back to Art Pieces Overview</Link>
    </>
  );
}
