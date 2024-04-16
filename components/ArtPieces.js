import { uid } from "uid";
import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

export default function ArtPieces({
  artPieces,
  favoriteArtPieceSlugs,
  onFavoriteButton,
}) {
  const StyledList = styled.ul`
    list-style: none;
  `;
  return (
    <>
      <StyledList>
        {artPieces.map((artPiece) => (
          <li key={uid()}>
            <ArtPiecePreview
              artPiece={artPiece}
              favoriteArtPieceSlugs={favoriteArtPieceSlugs}
              onFavoriteButton={onFavoriteButton}
            />
          </li>
        ))}
      </StyledList>
    </>
  );
}
