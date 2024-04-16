export default function FavoriteButton({
  onFavoriteButton,
  artPiece,
  favoriteArtPieceSlugs,
}) {
  function handleClick() {
    onFavoriteButton(artPiece);
  }

  return (
    <button onClick={handleClick}>
      {favoriteArtPieceSlugs.includes(artPiece.slug)
        ? "Remove from Favorites"
        : "Add to Favorites"}
    </button>
  );
}
