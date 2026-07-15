export function ProductVisual({ tone = 'sage', label = 'CareNova' }: { tone?: string; label?: string }) {
  return (
    <div className={`product-visual tone-${tone}`} aria-hidden="true">
      <div className="visual-orb orb-one" />
      <div className="visual-orb orb-two" />
      <div className="bottle bottle-tall"><span>{label}</span></div>
      <div className="bottle bottle-short"><span>LAB</span></div>
      <div className="jar"><span>01</span></div>
    </div>
  );
}
