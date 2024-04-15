import Image from "next/image";

export default function ArtPiecePreview({ artPiece }) {
  const reduceWidth = artPiece.dimensions.width * 0.2;
  const reduceHeight = artPiece.dimensions.height * 0.2;
  return (
    <>
      <article>
        <h3>{artPiece.name}</h3>
        <Image
          width={reduceWidth}
          height={reduceHeight}
          alt={`${artPiece.name} by ${artPiece.artist}`}
          src={artPiece.imageSource}
        />
        <p>Artist: {artPiece.artist}</p>
      </article>
    </>
  );
}
