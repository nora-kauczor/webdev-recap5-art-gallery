import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

// rename function
// pass artPieces to SpotLightPage as a prop
export default function SpotlightPage({ artPieces }) {
  // move useSWR-Hook and loading message from index.js to _app.js
  // remove console.log
  // update prop name
  return (
    <div>
      <Spotlight />
      <ArtPieces artPieces={artPieces} />
    </div>
  );
}
