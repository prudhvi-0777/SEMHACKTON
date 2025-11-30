export default function Header({ title, subtitle }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h2 style={{ margin: 0 }}>{title}</h2>
      <p style={{ margin: 0, color: "var(--muted)" }}>{subtitle}</p>
    </div>
  );
}
