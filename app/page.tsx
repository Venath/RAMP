import Image from "next/image";
import Loading from "./Components/Loading";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <Loading />
    </div>
  );
}
