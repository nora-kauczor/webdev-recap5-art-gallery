import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const currentArtPiece = artPieces.find((piece) => piece.slug === slug);
  console.log(currentArtPiece);

  if (!currentArtPiece) {
    return null;
  }
  return (
    <>
      <ArtPieceDetails currentArtPiece={currentArtPiece} />
    </>
  );
}
