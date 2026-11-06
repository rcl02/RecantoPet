# Recanto Pet – site

Site de uma página: `index.html`, `styles.css` e `main.js`. Não precisa de build.

## Editar textos
Abra `index.html` e procure por `EDITAR` ou `[Preencher`. Ainda faltam: horário de funcionamento, vacinas exigidas, busca e entrega, e os 3 depoimentos.

## Trocar ou adicionar uma foto
Cada foto tem 2 versões em `assets/`: `nome-640.webp` e `nome-1080.webp` (largura em pixels). Os originais em alta ficam em `../recanto-pet-originais/` (essa pasta não é publicada).
Para uma foto nova: converta para WebP nas larguras 640 e 1080 (ex.: squoosh.app) e use um **nome novo**, porque o cache das fotos dura 30 dias.

## Ver no computador
Na pasta `recanto-pet`, rode `npx http-server . -p 5501` e abra http://localhost:5501

## Publicar (Cloudflare Pages)
Faça o deploy da pasta `recanto-pet` no projeto `recantopet` → https://recantopet.pages.dev
- Arraste a pasta em *Workers & Pages → Create → Pages → Upload assets*, ou
- `npx wrangler pages deploy recanto-pet --project-name recantopet`

Se mudar o domínio, troque `recantopet.pages.dev` em `index.html`, `robots.txt` e `sitemap.xml`.
