import Image from "next/image";

export default function ArtPiecePreview({ artPiece }) {
  console.log(artPiece);
  return (
    <>
      <article>
        <h3>{artPiece.name}</h3>
        <Image
          width={200}
          height={200}
          alt={`test`}
          src={artPiece.imageSource}
        />
        <p>Artist: {artPiece.artist}</p>
      </article>
    </>
  );
}
