import { uid } from "uid";
import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

export default function ArtPieces({ artPieces }) {
  const StyledList = styled.ul`
    list-style: none;
  `;
  return (
    <>
      <StyledList>
        {artPieces.map((artPiece) => (
          <li key={id}>
            <ArtPiecePreview artPiece={artPiece} />
          </li>
        ))}
      </StyledList>
    </>
  );
}
