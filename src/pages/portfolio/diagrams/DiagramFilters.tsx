export default function DiagramFilters() {
  return (
    <svg
      viewBox="0 0 760 428"
      width="100%"
      role="img"
      aria-label="Shared filter system: one provider, many list views, state in URL and localStorage"
      style={{ display: "block", color: "currentColor" }}
    >
      <g fontFamily="'IBM Plex Mono', monospace" fontSize={13} fill="currentColor">
        <rect x={30} y={30} width={300} height={58} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={180} y={64} textAnchor="middle">FilterProvider</text>

        <rect x={440} y={20} width={290} height={42} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={585} y={46} textAnchor="middle">URL query string</text>

        <rect x={440} y={72} width={290} height={42} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={585} y={98} textAnchor="middle">localStorage</text>

        <line x1={338} y1={41} x2={432} y2={41} stroke="currentColor" strokeOpacity={0.32} />
        <path d="M427 36 L438 41 L427 46" fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <path d="M343 36 L332 41 L343 46" fill="none" stroke="currentColor" strokeOpacity={0.32} />

        <line x1={338} y1={93} x2={432} y2={93} stroke="currentColor" strokeOpacity={0.32} />
        <path d="M427 88 L438 93 L427 98" fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <path d="M343 88 L332 93 L343 98" fill="none" stroke="currentColor" strokeOpacity={0.32} />

        <line x1={180} y1={88} x2={180} y2={150} stroke="var(--accent)" />
        <line x1={135} y1={150} x2={625} y2={150} stroke="var(--accent)" />
        <line x1={135} y1={150} x2={135} y2={184} stroke="var(--accent)" />
        <path d="M130 179 L135 190 L140 179" fill="none" stroke="var(--accent)" />
        <line x1={380} y1={150} x2={380} y2={184} stroke="var(--accent)" />
        <path d="M375 179 L380 190 L385 179" fill="none" stroke="var(--accent)" />
        <line x1={625} y1={150} x2={625} y2={184} stroke="var(--accent)" />
        <path d="M620 179 L625 190 L630 179" fill="none" stroke="var(--accent)" />

        <rect x={30} y={196} width={210} height={56} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={135} y={229} textAnchor="middle">Tickets</text>

        <rect x={275} y={196} width={210} height={56} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={380} y={229} textAnchor="middle">Documents</text>

        <rect x={520} y={196} width={210} height={56} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={625} y={229} textAnchor="middle">Approvals</text>

        <text x={380} y={292} textAnchor="middle" opacity={0.62}>&#8230;and every other list view</text>

        <line x1={30} y1={352} x2={48} y2={352} stroke="var(--accent)" />
        <text x={58} y={357} opacity={0.62}>a view adopts filtering by wrapping in the provider &#8212; no new state code</text>
      </g>
    </svg>
  );
}
