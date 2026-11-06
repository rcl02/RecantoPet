# Recanto Pet – site

Site de uma página, sem build:

```
index.html          página
style.css           estilos
script.js           menu, animações e galeria
assets/img/         fotos (WebP 640 e 1080), logo, ícone 192 e imagem de compartilhamento
favicon-32.png, apple-touch-icon.png, site.webmanifest
robots.txt, sitemap.xml, _headers (cache do Cloudflare Pages)
```

## Editar textos
Abra `index.html` e procure por `EDITAR` ou `[Preencher`. Os depoimentos são trechos de avaliações do Google Maps.

## Trocar ou adicionar uma foto
Cada foto tem 2 versões em `assets/img/`: `nome-640.webp` e `nome-1080.webp` (largura em pixels). Os originais em alta ficam em `Desktop/RecantoPet-originais/`, fora do projeto, para não serem publicados.
Para uma foto nova: converta para WebP nas larguras 640 e 1080 (ex.: squoosh.app) e use um **nome novo**, porque o cache das fotos dura 30 dias.

## Ver no computador
Na pasta do projeto, rode `npx http-server . -p 5501` e abra http://localhost:5501

## Publicar (Cloudflare Pages)
Faça o deploy da pasta do projeto no projeto `recantopet` → https://recantopet.pages.dev
- Arraste a pasta em *Workers & Pages → Create → Pages → Upload assets* (sem a pasta `.git`), ou
- `npx wrangler pages deploy . --project-name recantopet`

Se mudar o domínio, troque `recantopet.pages.dev` em `index.html`, `robots.txt` e `sitemap.xml`.
