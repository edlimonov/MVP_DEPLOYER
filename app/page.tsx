export default function Home() {
  return (
    <div style={styles.page}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

      <div style={styles.container}>
        <h1 style={styles.title}>Arbora</h1>
        <p style={styles.subtitle}>Платформа арбитража криптовалют — обнаруживайте и эксплуатируйте ценовые расхождения в реальном времени.</p>

        <div style={styles.card}>
          <label style={styles.label}>Подключите источник (пример)</label>
          <input style={styles.input} placeholder="https://github.com/owner/repo (пример)" disabled />

          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <button style={{ ...styles.button, flex: 1 }} disabled>Запустить сканирование</button>
            <button style={{ ...styles.ghost, width: 160 }} disabled>Остановить</button>
          </div>

          <div style={styles.example}>Поддерживается: Binance, Coinbase, Kraken, Uniswap</div>
        </div>

        <section style={styles.features}>
          <div style={styles.feature}>
            <h3 style={styles.featureTitle}>Моментально</h3>
            <p style={styles.featureText}>Низкая латентность — сканирование ордербуков в реальном времени.</p>
          </div>

          <div style={styles.feature}>
            <h3 style={styles.featureTitle}>Безопасно</h3>
            <p style={styles.featureText}>Изолированные стратегии и контроль рисков по умолчанию.</p>
          </div>

          <div style={styles.feature}>
            <h3 style={styles.featureTitle}>Прозрачно</h3>
            <p style={styles.featureText}>Логи и истории сделок доступны для аудита.</p>
          </div>
        </section>

        <footer style={styles.footer}>Made with ❤️ • Arbora — demo landing</footer>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', color: '#fff', fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" },
  container: { width: '100%', maxWidth: 940, padding: 28, textAlign: 'center' },
  title: { fontSize: 48, margin: 0, background: 'linear-gradient(90deg,#fff,#9ca3af)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700 },
  subtitle: { marginTop: 12, color: '#b3b3b3', fontSize: 18 },
  card: { marginTop: 28, background: '#0f0f10', borderRadius: 14, padding: 20, border: '1px solid #1f1f23', boxShadow: '0 10px 30px rgba(2,6,23,0.6)' },
  label: { display: 'block', textAlign: 'left', color: '#9aa0a6', marginBottom: 8, fontSize: 13 },
  input: { width: '100%', padding: '14px 16px', borderRadius: 10, border: '1px solid #26262a', background: '#0b0b0c', color: '#ddd', fontSize: 14, outline: 'none' },
  button: { padding: '12px 16px', borderRadius: 10, border: 'none', background: '#fff', color: '#000', fontWeight: 600, cursor: 'not-allowed' },
  ghost: { padding: '12px 16px', borderRadius: 10, border: '1px solid #333', background: 'transparent', color: '#ddd', cursor: 'not-allowed' },
  example: { marginTop: 12, color: '#777', fontSize: 13, textAlign: 'left' },
  features: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 28, textAlign: 'left' },
  feature: { background: '#080809', padding: 18, borderRadius: 12, border: '1px solid #1a1a1d' },
  featureTitle: { margin: 0, color: '#fff', fontSize: 16 },
  featureText: { marginTop: 8, color: '#9aa0a6', fontSize: 13 },
  footer: { marginTop: 36, color: '#6b6f76', fontSize: 13 }
}