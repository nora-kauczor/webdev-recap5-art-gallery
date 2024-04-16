import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  artPieces,
  onFavoriteButton,
  favoriteArtPieceSlugs,
}) {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Spotlight Component</h2>
      <Spotlight
        artPieces={artPieces}
        onFavoriteButton={onFavoriteButton}
        favoriteArtPieceSlugs={favoriteArtPieceSlugs}
      />
    </div>
  );
}
