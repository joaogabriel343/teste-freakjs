import { Fragment } from "freakjs";
import { sneakers } from "../data/sneakers";

export const metadata = {
  title: "Aurora Kicks",
  description: "Loja de tênis com produtos em destaque e página de detalhes.",
};

const css = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { background: #f4efe6; }
  body {
    min-height: 100vh;
    color: #171716;
    background:
      radial-gradient(circle at top left, rgba(217, 119, 6, 0.18), transparent 34%),
      radial-gradient(circle at 85% 15%, rgba(15, 118, 110, 0.14), transparent 28%),
      linear-gradient(180deg, #fbf7f1 0%, #f1eadf 100%);
  }
  a { color: inherit; text-decoration: none; }
  img { display: block; max-width: 100%; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes drift { 0%, 100% { transform: translate3d(0, 0, 0); } 50% { transform: translate3d(0, -10px, 0); } }
  .page { min-height: 100vh; position: relative; overflow: hidden; font-family: "Palatino Linotype", Georgia, serif; }
  .page::before,
  .page::after {
    content: "";
    position: absolute;
    border-radius: 999px;
    pointer-events: none;
    filter: blur(4px);
  }
  .page::before { width: 340px; height: 340px; top: -110px; right: -80px; background: radial-gradient(circle, rgba(217, 119, 6, 0.18), transparent 64%); animation: drift 10s ease-in-out infinite; }
  .page::after { width: 420px; height: 420px; left: -120px; bottom: 80px; background: radial-gradient(circle, rgba(15, 118, 110, 0.14), transparent 66%); animation: drift 14s ease-in-out infinite reverse; }
  .shell { position: relative; z-index: 1; width: min(1160px, calc(100% - 32px)); margin: 0 auto; padding: 28px 0 56px; }
  .topbar,
  .hero-copy,
  .hero-panel,
  .product-card { border: 1px solid rgba(23, 23, 23, 0.12); border-radius: 28px; box-shadow: 0 24px 70px rgba(28, 21, 14, 0.18); }
  .topbar { display: flex; justify-content: space-between; gap: 20px; align-items: center; padding: 14px 18px; background: rgba(255, 255, 255, 0.56); backdrop-filter: blur(14px); animation: fadeUp 0.55s ease both; }
  .brand { display: grid; gap: 4px; }
  .brand-kicker,
  .stat,
  .chip,
  .product-link,
  .brand-note,
  .section-head p,
  .footer,
  .hero-copy p,
  .hero-panel p,
  .product-desc { font-family: "Trebuchet MS", "Arial Narrow", sans-serif; }
  .brand-kicker { color: #d97706; font-size: 0.72rem; letter-spacing: 0.22em; text-transform: uppercase; }
  .brand-title { font-size: 1.7rem; letter-spacing: -0.04em; line-height: 1; font-weight: 700; }
  .brand-note { color: #6a635b; font-size: 0.96rem; }
  .hero { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr); gap: 24px; margin-top: 24px; align-items: stretch; }
  .hero-copy { padding: 34px; background: linear-gradient(135deg, rgba(18, 18, 20, 0.98), rgba(43, 31, 18, 0.94)); color: #fff8ef; display: grid; gap: 28px; min-height: 360px; animation: fadeUp 0.55s 0.08s ease both; }
  .hero-copy h1 { font-size: clamp(2.8rem, 6vw, 5.5rem); line-height: 0.95; letter-spacing: -0.06em; max-width: 8ch; }
  .hero-copy p { max-width: 60ch; color: rgba(255, 248, 239, 0.78); font-size: 1.05rem; line-height: 1.7; }
  .hero-stats { display: flex; flex-wrap: wrap; gap: 10px; }
  .stat { padding: 10px 14px; border-radius: 999px; background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.12); font-size: 0.82rem; letter-spacing: 0.08em; text-transform: uppercase; }
  .hero-panel { padding: 24px; background: rgba(255, 255, 255, 0.62); backdrop-filter: blur(14px); display: grid; gap: 18px; animation: fadeUp 0.55s 0.16s ease both; }
  .hero-panel h2 { font-size: 1.6rem; letter-spacing: -0.04em; }
  .highlight { border-radius: 22px; overflow: hidden; background: linear-gradient(135deg, #1f2937, #0f766e); min-height: 220px; position: relative; }
  .highlight img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.02); }
  .highlight-label { position: absolute; left: 16px; bottom: 16px; padding: 8px 12px; border-radius: 999px; background: rgba(17, 17, 17, 0.72); color: #fff8ef; font-size: 0.78rem; letter-spacing: 0.16em; text-transform: uppercase; }
  .section-head { display: flex; justify-content: space-between; align-items: end; gap: 20px; margin: 30px 4px 16px; }
  .section-head h2 { font-size: 1.9rem; letter-spacing: -0.05em; }
  .section-head p { color: #6a635b; max-width: 44ch; }
  .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
  .product-card { display: grid; background: rgba(255, 255, 255, 0.72); overflow: hidden; animation: fadeUp 0.55s ease both; }
  .product-card:hover { transform: translateY(-4px); border-color: rgba(217, 119, 6, 0.32); box-shadow: 0 28px 48px rgba(30, 20, 10, 0.14); }
  .product-image { aspect-ratio: 1 / 0.9; background: linear-gradient(135deg, #d97706, #0f766e); padding: 10px; }
  .product-image img { width: 100%; height: 100%; object-fit: cover; border-radius: 20px; }
  .product-body { display: grid; gap: 12px; padding: 18px; }
  .product-top { display: flex; justify-content: space-between; gap: 14px; align-items: start; }
  .product-body h3 { font-size: 1.2rem; line-height: 1.15; }
  .product-price { color: #d97706; font-weight: 700; font-size: 1rem; white-space: nowrap; }
  .product-desc { color: #6a635b; line-height: 1.6; font-size: 0.97rem; }
  .product-meta { display: flex; flex-wrap: wrap; gap: 8px; }
  .chip { padding: 6px 10px; border-radius: 999px; background: rgba(23, 23, 23, 0.06); color: #3b342d; font-size: 0.74rem; letter-spacing: 0.1em; text-transform: uppercase; }
  .product-link { display: inline-flex; width: fit-content; align-items: center; justify-content: center; gap: 8px; padding: 11px 14px; border-radius: 14px; background: #121214; color: #fff8ef; letter-spacing: 0.08em; text-transform: uppercase; font-size: 0.74rem; }
  .footer { margin-top: 24px; padding: 0 4px; color: #6a635b; font-size: 0.9rem; }
  @media (max-width: 960px) { .hero, .grid { grid-template-columns: 1fr; } .hero-copy h1 { max-width: 10ch; } .section-head { flex-direction: column; align-items: start; } }
  @media (max-width: 640px) { .shell { width: min(100% - 18px, 100%); padding-top: 12px; } .topbar, .hero-copy, .hero-panel { border-radius: 20px; } .topbar { padding: 14px 16px; flex-direction: column; align-items: start; } .hero-copy, .hero-panel { padding: 20px; } }
`;

export default function Home() {
  const featured = sneakers[0];

  return (
    <Fragment>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main class="page">
        <div class="shell">
          <header class="topbar">
            <div class="brand">
              <span class="brand-kicker">Loja de Tênis</span>
              <span class="brand-title">Aurora Kicks</span>
            </div>
            <p class="brand-note">Seleção curada de modelos para corrida, lifestyle e dia a dia.</p>
          </header>

          <section class="hero">
            <div class="hero-copy">
              <div>
                <h1>Encontre o par que combina com o seu ritmo.</h1>
              </div>
              <div>
                <p>Uma vitrine simples e direta: veja os tênis disponíveis na página inicial, abra cada produto para conferir detalhes e escolha o seu favorito sem distrações.</p>
                <div class="hero-stats" aria-label="Destaques da loja">
                  <span class="stat">6 modelos selecionados</span>
                  <span class="stat">Entrega visual instantânea</span>
                  <span class="stat">Detalhes por produto</span>
                </div>
              </div>
            </div>

            <aside class="hero-panel">
              <h2>Modelo em destaque</h2>
              <div class="highlight">
                <img src={featured.image} alt={featured.name} />
                <span class="highlight-label">Mais pedido</span>
              </div>
              <div>
                <p>{featured.name}</p>
                <p>{featured.priceLabel}</p>
              </div>
            </aside>
          </section>

          <section>
            <div class="section-head">
              <div>
                <h2>Tênis disponíveis</h2>
                <p>Clique em qualquer modelo para abrir uma página com fotos maiores, atributos e descrição.</p>
              </div>
            </div>

            <div class="grid">
              {sneakers.map((sneaker, index) => (
                <article class="product-card" style={{ animationDelay: `${index * 60}ms` }}>
                  <div class="product-image">
                    <img src={sneaker.image} alt={sneaker.name} />
                  </div>
                  <div class="product-body">
                    <div class="product-top">
                      <h3>{sneaker.name}</h3>
                      <div class="product-price">{sneaker.priceLabel}</div>
                    </div>
                    <p class="product-desc">{sneaker.shortDescription}</p>
                    <div class="product-meta">
                      {sneaker.tags.map((tag) => (
                        <span class="chip">{tag}</span>
                      ))}
                    </div>
                    <a class="product-link" href={`/tenis/${sneaker.slug}`}>Ver detalhes</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <p class="footer">Aurora Kicks · vitrine de produtos para navegação e visualização.</p>
        </div>
      </main>
    </Fragment>
  );
}