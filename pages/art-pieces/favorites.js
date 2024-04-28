// Warum nicht in art-pieces Ordner?!

import ArtPieces from "@/components/ArtPieces";

export default function FavoritePage({
  artPieces,
  favoriteArtPieceSlugs,
  onFavoriteButton,
}) {
  const favoriteArtPieces = artPieces.filter((artPiece) =>
    favoriteArtPieceSlugs.includes(artPiece.slug)
  );
  return (
    <>
      <h1>Favorite Art Pieces</h1>
      <ArtPieces
        artPieces={favoriteArtPieces}
        onFavoriteButton={onFavoriteButton}
      />
    </>
  );
}
