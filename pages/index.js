import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ artPieces }) {
  return (
    <div>
      <Spotlight />
      <ArtPieces artPieces={artPieces} />
    </div>
  );
}