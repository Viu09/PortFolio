/**
 * Decorative background shared across pages.
 */
export default function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <span className="orb orb-1" />
      <span className="orb orb-2" />
      <span className="orb orb-3" />
      <span className="grid" />
    </div>
  );
}
