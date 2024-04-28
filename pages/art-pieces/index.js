import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  artPieces,
  favoriteArtPieceSlugs,
  onFavoriteButton,
  error,
  isLoading,
}) {
  if (isLoading) {
    return <div>Is Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }
  return (
    <ArtPieces
      artPieces={artPieces}
      favoriteArtPieceSlugs={favoriteArtPieceSlugs}
      onFavoriteButton={onFavoriteButton}
      error={error}
      isLoading={isLoading}
    />
  );
}
