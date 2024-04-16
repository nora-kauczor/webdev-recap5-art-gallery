import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({
  artPieces,
  favoriteArtPieceSlugs,
  onFavoriteButton,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const currentArtPiece = artPieces.find((artPiece) => artPiece.slug === slug);

  if (!currentArtPiece) {
    return null;
  }
  return (
    <>
      <ArtPieceDetails
        currentArtPiece={currentArtPiece}
        favoriteArtPieceSlugs={favoriteArtPieceSlugs}
        onFavoriteButton={onFavoriteButton}
      />
    </>
  );
}
