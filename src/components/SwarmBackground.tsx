export default function SwarmBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="swarm-orb orb-blue w-[600px] h-[600px] -top-[10%] -left-[10%]" />
      <div className="swarm-orb orb-pink w-[500px] h-[500px] top-[20%] -right-[5%]" />
      <div className="swarm-orb orb-yellow w-[400px] h-[400px] bottom-[10%] left-[5%]" />
    </div>
  );
}
