export default function Home() {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-card" />
        <div className="aspect-video rounded-xl bg-card" />
        <div className="aspect-video rounded-xl bg-card" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-card md:min-h-min" />
      <div className="min-h-[100vh] flex-1 rounded-xl bg-card md:min-h-min" />
      <div className="min-h-[100vh] flex-1 rounded-xl bg-card md:min-h-min" />
    </>
  );
}
