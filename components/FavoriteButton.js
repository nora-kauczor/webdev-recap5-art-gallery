export default function FavoriteButton({
  onFavoriteButton,
  artPiece,
  favoriteArtPieceSlugs,
  error,
  isLoading,
}) {
  function handleClick() {
    onFavoriteButton(artPiece);
  }

  if (isLoading) {
    return <div>Is Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }

  return (
    <button onClick={handleClick}>
      {favoriteArtPieceSlugs.includes(artPiece.slug)
        ? "Remove from Favorites"
        : "Add to Favorites"}
    </button>
  );
}
