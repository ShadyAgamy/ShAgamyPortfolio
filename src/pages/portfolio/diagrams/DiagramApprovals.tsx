export default function DiagramApprovals() {
  return (
    <svg
      viewBox="0 0 760 428"
      width="100%"
      role="img"
      aria-label="Approvals cross-view sync: two views in separate provider trees kept in sync by a CustomEvent bus"
      style={{ display: "block", color: "currentColor" }}
    >
      <g fontFamily="'IBM Plex Mono', monospace" fontSize={13} fill="currentColor">
        <rect x={30} y={34} width={272} height={60} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={166} y={69} textAnchor="middle">Approvals list</text>

        <rect x={458} y={34} width={272} height={60} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={594} y={69} textAnchor="middle">Item approval panel</text>

        <line x1={380} y1={20} x2={380} y2={108} stroke="currentColor" strokeOpacity={0.32} strokeDasharray="4 4" />
        <text x={380} y={59} textAnchor="middle" opacity={0.62}>no shared</text>
        <text x={380} y={77} textAnchor="middle" opacity={0.62}>provider tree</text>

        <line x1={166} y1={100} x2={166} y2={134} stroke="var(--accent)" />
        <path d="M161 129 L166 140 L171 129" fill="none" stroke="var(--accent)" />
        <line x1={594} y1={100} x2={594} y2={134} stroke="var(--accent)" />
        <path d="M589 129 L594 140 L599 129" fill="none" stroke="var(--accent)" />

        <rect x={30} y={146} width={700} height={52} rx={3} fill="none" stroke="var(--accent)" />
        <text x={380} y={177} textAnchor="middle" fill="var(--accent)" letterSpacing={0.5}>CustomEvent bus</text>

        <line x1={380} y1={204} x2={380} y2={232} stroke="var(--accent)" />
        <path d="M375 227 L380 238 L385 227" fill="none" stroke="var(--accent)" />

        <rect x={30} y={244} width={300} height={60} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={180} y={279} textAnchor="middle">approvals-context</text>

        <rect x={518} y={244} width={212} height={60} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={624} y={279} textAnchor="middle">Server</text>

        <line x1={330} y1={274} x2={512} y2={274} stroke="currentColor" strokeOpacity={0.32} />
        <path d="M507 269 L518 274 L507 279" fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={421} y={264} textAnchor="middle" opacity={0.62}>refetch</text>

        <line x1={30} y1={352} x2={48} y2={352} stroke="var(--accent)" />
        <text x={58} y={357} opacity={0.62}>counter token drops stale responses</text>
      </g>
    </svg>
  );
}
