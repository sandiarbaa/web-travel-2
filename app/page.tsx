export default function Home() {
  return (
    <div className="w-full h-[100vh] relative">
      <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-blue-800/50"></div>
      <video
        src="/images/hero.mp4"
        muted
        loop
        autoPlay
        className="w-[100%] h-[100%] object-cover"
      ></video>
    </div>
  );
}
