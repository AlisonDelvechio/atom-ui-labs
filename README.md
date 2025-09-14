# 🧬 Atom UI

**Atom UI** é uma biblioteca de Web Components desenvolvida com [Stencil.js](https://stenciljs.com/) e SCSS, focada em criar componentes modulares, responsivos e reutilizáveis para aplicações Web e Mobile.

Parte do monorepo [`atom-ui-labs`](https://github.com/seu-usuario/atom-ui-labs), o projeto permite integração direta com frameworks como Angular, Vue ou até uso puro com HTML.

---

## 🚀 Instalação

Clone o repositório monorepo:

```bash
git clone https://github.com/seu-usuario/atom-ui-labs.git
cd atom-ui-labs/atom-ui
```

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm start
```

---

## 🧱 Componentes disponíveis

### ✅ `atom-alert`

```html
<atom-alert
  status="warning"
  icon="warning"
  textcolor="text-yellow-700"
  strokeColor="stroke-yellow-200"
  iconColor="icon-yellow-600"
  device="web"
  [hasStatusIcon]="true"
  [hasCloseIcon]="true"
>
  Atenção: algo requer sua atenção.
</atom-alert>
```

### ✅ `menu-accordion`

```html
<menu-accordion heading="Menu de opções" device="web" expanded="true">
  <a class="accordion-item" href="/">
    <span>Home</span>
    <svg class="icon" viewBox="0 0 24 24"><path d="M10 17l5-5-5-5v10z"/></svg>
  </a>
</menu-accordion>
```

---

## ⚙️ Build

Para gerar a versão distribuível:

```bash
npm run build
```

Os arquivos serão gerados em `dist/`.

---

## 🌐 Integração com Angular (exemplo)

```ts
// angular.json
"scripts": [
  "node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js",
  "dist/atom-ui/atom-ui.js"
]
```

E registre os componentes no `main.ts`:

```ts
import { defineCustomElements } from 'atom-ui/loader';
defineCustomElements();
```

---

## 🌍 Deploy com Netlify

No projeto `demo-app-angular`, configure:

- **Build command**: `npm run build`
- **Publish directory**: `dist/demo-app-angular/browser`
- Arquivo `_redirects` incluso para SPA

---

## 📦 Tecnologias

- Stencil.js
- SCSS (com `@use`)
- Web Components (encapsulados com `shadow DOM`)
- Integração Angular 19

---

## 📝 Licença

MIT ©Alison Delvechio
