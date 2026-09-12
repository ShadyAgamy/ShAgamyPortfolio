export default function DiagramChatbot() {
  return (
    <svg
      viewBox="0 0 760 428"
      width="100%"
      role="img"
      aria-label="Chatbot as an isolated Preact widget mounted inside the main React app"
      style={{ display: "block", color: "currentColor" }}
    >
      <g fontFamily="'IBM Plex Mono', monospace" fontSize={13} fill="currentColor">
        <rect x={30} y={40} width={470} height={300} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={50} y={70} opacity={0.62}>Main React app</text>

        <rect x={80} y={130} width={370} height={160} rx={3} fill="none" stroke="var(--accent)" />
        <text x={265} y={200} textAnchor="middle" fill="var(--accent)">Chatbot (Preact)</text>
        <text x={265} y={222} textAnchor="middle" opacity={0.62}>own bundle &#183; own state</text>

        <line x1={265} y1={84} x2={265} y2={120} stroke="var(--accent)" />
        <path d="M260 115 L265 126 L270 115" fill="none" stroke="var(--accent)" />
        <text x={277} y={106} opacity={0.62}>init()</text>

        <line x1={458} y1={210} x2={534} y2={210} stroke="var(--accent)" />
        <path d="M529 205 L540 210 L529 215" fill="none" stroke="var(--accent)" />
        <text x={499} y={199} textAnchor="middle" opacity={0.62}>WebSocket</text>

        <rect x={548} y={184} width={182} height={52} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={639} y={215} textAnchor="middle">Support backend</text>

        <line x1={30} y1={386} x2={48} y2={386} stroke="var(--accent)" />
        <text x={58} y={391} opacity={0.62}>inside the app, but not entangled with it</text>
      </g>
    </svg>
  );
}
