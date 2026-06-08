import { Fragment } from "freakjs";
import type { PageProps } from "freakjs";
import { getSneakerBySlug, sneakers } from "../../data/sneakers";

export const metadata = {
  title: "Aurora Kicks | Detalhe do tênis",
  description: "Detalhes completos do produto selecionado na loja de tênis.",
};

const css = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { background: #f4efe6; }
  body {
    min-height: 100vh;
    color: #181716;
    background:
      radial-gradient(circle at top right, rgba(217, 119, 6, 0.16), transparent 30%),
      radial-gradient(circle at 20% 20%, rgba(15, 118, 110, 0.14), transparent 24%),
      linear-gradient(180deg, #faf6f0 0%, #efe5d7 100%);
  }
  a { color: inherit; text-decoration: none; }
  img { display: block; max-width: 100%; }
  @keyframes rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  .page { min-height: 100vh; padding: 24px 0 56px; position: relative; overflow: hidden; font-family: "Palatino Linotype", Georgia, serif; }
  .page::before { content: ""; position: absolute; width: 440px; height: 440px; right: -120px; top: -100px; border-radius: 999px; background: radial-gradient(circle, rgba(217, 119, 6, 0.18), transparent 66%); pointer-events: none; }
  .shell { position: relative; z-index: 1; width: min(1120px, calc(100% - 32px)); margin: 0 auto; }
  .breadcrumb { display: inline-flex; align-items: center; gap: 8px; color: #62574d; font-size: 0.88rem; margin-bottom: 16px; font-family: "Trebuchet MS", "Arial Narrow", sans-serif; }
  .breadcrumb span { color: #a35f11; }
  .layout { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(320px, 0.98fr); gap: 24px; align-items: start; }
  .media, .content, .back-link, .card, .pill { border: 1px solid rgba(24, 23, 22, 0.12); border-radius: 28px; box-shadow: 0 24px 60px rgba(31, 22, 13, 0.14); }
  .media { padding: 14px; background: rgba(255, 255, 255, 0.6); animation: rise 0.55s ease both; }
  .media-frame { overflow: hidden; border-radius: 22px; min-height: 520px; background: linear-gradient(135deg, #d97706, #0f766e); }
  .media-frame img { width: 100%; height: 100%; object-fit: cover; }
  .content { padding: 28px; background: rgba(255, 255, 255, 0.74); backdrop-filter: blur(14px); display: grid; gap: 18px; animation: rise 0.55s 0.08s ease both; }
  .eyebrow { display: inline-flex; width: fit-content; padding: 8px 12px; border-radius: 999px; background: rgba(217, 119, 6, 0.12); color: #a35f11; font-size: 0.74rem; letter-spacing: 0.16em; text-transform: uppercase; font-family: "Trebuchet MS", "Arial Narrow", sans-serif; }
  .content h1 { font-size: clamp(2.4rem, 5vw, 4.4rem); letter-spacing: -0.06em; line-height: 0.95; }
  .price { color: #d97706; font-size: 1.3rem; font-weight: 700; font-family: "Trebuchet MS", "Arial Narrow", sans-serif; }
  .description { color: #5f554b; line-height: 1.75; font-size: 1rem; font-family: "Trebuchet MS", "Arial Narrow", sans-serif; }
  .specs { display: grid; gap: 10px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .card { background: rgba(255, 255, 255, 0.84); padding: 14px 16px; }
  .card-label { display: block; color: #8b6a4a; font-size: 0.7rem; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 6px; font-family: "Trebuchet MS", "Arial Narrow", sans-serif; }
  .card-value { font-size: 0.98rem; line-height: 1.4; }
  .chips { display: flex; flex-wrap: wrap; gap: 10px; }
  .pill { padding: 8px 12px; background: rgba(23, 23, 23, 0.06); color: #3f342c; font-size: 0.76rem; letter-spacing: 0.12em; text-transform: uppercase; font-family: "Trebuchet MS", "Arial Narrow", sans-serif; }
  .back-link { display: inline-flex; width: fit-content; align-items: center; gap: 8px; padding: 12px 16px; background: #181716; color: #fff8ef; font-family: "Trebuchet MS", "Arial Narrow", sans-serif; letter-spacing: 0.08em; text-transform: uppercase; font-size: 0.76rem; }
  .related { margin-top: 28px; display: grid; gap: 14px; }
  .related h2 { font-size: 1.4rem; letter-spacing: -0.04em; }
  .related-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
  .related-item { display: grid; gap: 10px; padding: 12px; background: rgba(255, 255, 255, 0.6); border-radius: 22px; border: 1px solid rgba(24, 23, 22, 0.1); }
  .related-item img { border-radius: 16px; aspect-ratio: 1 / 0.88; object-fit: cover; }
  .related-item strong { font-size: 0.95rem; line-height: 1.2; }
  .related-item span { color: #d97706; font-size: 0.9rem; font-family: "Trebuchet MS", "Arial Narrow", sans-serif; }
  @media (max-width: 960px) { .layout, .related-grid { grid-template-columns: 1fr; } .media-frame { min-height: 420px; } }
  @media (max-width: 640px) { .shell { width: min(100% - 18px, 100%); } .content { padding: 20px; border-radius: 22px; } .media { border-radius: 22px; } .specs { grid-template-columns: 1fr; } }
`;

export default function SneakerDetail({ params }: PageProps) {
  const sneaker = getSneakerBySlug(params.slug);

  if (!sneaker) {
    return (
      <Fragment>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <main class="page">
          <div class="shell">
            <a class="breadcrumb" href="/">Aurora Kicks <span>›</span> produto não encontrado</a>
            <div class="content">
              <span class="eyebrow">Produto indisponível</span>
              <h1>Não encontrei esse tênis.</h1>
              <p class="description">Volte para a vitrine inicial para escolher outro modelo disponível.</p>
              <a class="back-link" href="/">Voltar para a loja</a>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }

  const related = sneakers.filter((item) => item.slug !== sneaker.slug).slice(0, 3);

  return (
    <Fragment>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main class="page">
        <div class="shell">
          <a class="breadcrumb" href="/">Aurora Kicks <span>›</span> {sneaker.name}</a>

          <section class="layout">
            <div class="media">
              <div class="media-frame"><img src={sneaker.image} alt={sneaker.name} /></div>
            </div>

            <div class="content">
              <span class="eyebrow">Detalhes do produto</span>
              <h1>{sneaker.name}</h1>
              <div class="price">{sneaker.priceLabel}</div>
              <p class="description">{sneaker.description}</p>

              <div class="specs">
                <div class="card"><span class="card-label">Categoria</span><div class="card-value">{sneaker.category}</div></div>
                <div class="card"><span class="card-label">Colorway</span><div class="card-value">{sneaker.colorway}</div></div>
                <div class="card"><span class="card-label">Amortecimento</span><div class="card-value">{sneaker.cushioning}</div></div>
                <div class="card"><span class="card-label">Drop</span><div class="card-value">{sneaker.drop}</div></div>
              </div>

              <div class="chips">
                {sneaker.tags.map((tag) => (
                  <span class="pill">{tag}</span>
                ))}
              </div>

              <a class="back-link" href="/">Voltar para a vitrine</a>
            </div>
          </section>

          <section class="related">
            <h2>Outros modelos</h2>
            <div class="related-grid">
              {related.map((item) => (
                <a class="related-item" href={`/tenis/${item.slug}`}>
                  <img src={item.image} alt={item.name} />
                  <strong>{item.name}</strong>
                  <span>{item.priceLabel}</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </Fragment>
  );
}