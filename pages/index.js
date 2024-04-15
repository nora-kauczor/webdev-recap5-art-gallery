import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";
import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading } = useSWR(`https://example-apis.vercel.app/api/art`);

  if (isLoading) return <div>Is Loading...</div>;

  console.log(data);

  return (
    <div>
      <Spotlight artPieces={data} />
      <ArtPieces artPieces={data} />
    </div>
  );
}
