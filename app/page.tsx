import HomePage from "@/components/HomePage";
import VideoBackground from "@/components/VideoBackground";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <VideoBackground />

      <HomePage />
    </div>
  );
}
