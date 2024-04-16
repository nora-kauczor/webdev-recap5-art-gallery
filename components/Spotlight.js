import Image from "next/image";
import React from "react";
import FavoriteButton from "./FavoriteButton";

export default function Spotlight({
  artPieces,
  onFavoriteButton,
  favoriteArtPieceSlugs,
}) {
  const randomIndex = Math.floor(Math.random() * artPieces.length);
  const spotlightArtPiece = artPieces[randomIndex];
  const reduceWidth = spotlightArtPiece.dimensions.width * 0.2;
  const reduceHeight = spotlightArtPiece.dimensions.height * 0.2;

  return (
    <div>
      <h2>Spotlight</h2>
      <Image
        width={reduceWidth}
        height={reduceHeight}
        alt={`${spotlightArtPiece.name} by ${spotlightArtPiece.artist}`}
        src={spotlightArtPiece.imageSource}
      />
      <p>
        {spotlightArtPiece.name} by {spotlightArtPiece.artist}
      </p>
      <FavoriteButton
        onFavoriteButton={onFavoriteButton}
        artPiece={spotlightArtPiece}
        favoriteArtPieceSlugs={favoriteArtPieceSlugs}
      />
    </div>
  );
}

function greet() {
  const name = "Felix";
}
