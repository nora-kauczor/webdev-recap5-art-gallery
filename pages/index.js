import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading } = useSWR(`https://example-apis.vercel.app/api/art`);

  if (isLoading) return <div>Is Loading...</div>;

  console.log(data);

  return (
    <div>
      <ArtPieces artPieces={data} />
    </div>
  );
}
