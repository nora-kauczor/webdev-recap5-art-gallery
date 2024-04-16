import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  artPieces,
  favoriteArtPieceSlugs,
  onFavoriteButton,
}) {
  return (
    <ArtPieces
      artPieces={artPieces}
      favoriteArtPieceSlugs={favoriteArtPieceSlugs}
      onFavoriteButton={onFavoriteButton}
    />
  );
}
