export default function DiagramUploader() {
  return (
    <svg
      viewBox="0 0 760 428"
      width="100%"
      role="img"
      aria-label="Folder upload pipeline with per-file progress, and file version comparison"
      style={{ display: "block", color: "currentColor" }}
    >
      <g fontFamily="'IBM Plex Mono', monospace" fontSize={13} fill="currentColor">
        <rect x={30} y={46} width={152} height={56} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={106} y={79} textAnchor="middle">Folder dropped</text>

        <line x1={190} y1={74} x2={216} y2={74} stroke="var(--accent)" />
        <path d="M211 69 L222 74 L211 79" fill="none" stroke="var(--accent)" />

        <rect x={230} y={46} width={152} height={56} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={306} y={79} textAnchor="middle">Upload queue</text>

        <line x1={390} y1={74} x2={416} y2={74} stroke="var(--accent)" />
        <path d="M411 69 L422 74 L411 79" fill="none" stroke="var(--accent)" />

        <rect x={430} y={46} width={152} height={56} rx={3} fill="none" stroke="var(--accent)" />
        <text x={506} y={72} textAnchor="middle" fill="var(--accent)">per-file</text>
        <text x={506} y={89} textAnchor="middle" fill="var(--accent)">progress</text>

        <line x1={590} y1={74} x2={616} y2={74} stroke="var(--accent)" />
        <path d="M611 69 L622 74 L611 79" fill="none" stroke="var(--accent)" />

        <rect x={630} y={46} width={100} height={56} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={680} y={79} textAnchor="middle">Stored</text>

        <text x={30} y={176} opacity={0.62}>one file, many versions</text>

        <rect x={30} y={198} width={190} height={44} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={125} y={225} textAnchor="middle">v3 &#183; current</text>

        <rect x={30} y={252} width={190} height={44} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={125} y={279} textAnchor="middle">v2</text>

        <rect x={30} y={306} width={190} height={44} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.32} />
        <text x={125} y={333} textAnchor="middle">v1</text>

        <path d="M236 204 L250 204 L250 290 L236 290" fill="none" stroke="var(--accent)" />
        <line x1={250} y1={247} x2={276} y2={247} stroke="var(--accent)" />
        <path d="M271 242 L282 247 L271 252" fill="none" stroke="var(--accent)" />

        <rect x={290} y={221} width={200} height={52} rx={3} fill="none" stroke="var(--accent)" />
        <text x={390} y={252} textAnchor="middle" fill="var(--accent)">Compare modal</text>
      </g>
    </svg>
  );
}
