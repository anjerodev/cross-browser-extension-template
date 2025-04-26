# Chrome Extension Boilerplate (TypeScript + Vite + Preact + TailwindCSS + Biome)

[![Made with Preact](https://img.shields.io/badge/Made%20with-Preact-673ab8.svg)](https://preactjs.com/)
[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646cff.svg)](https://vitejs.dev/)
[![Styled with TailwindCSS](https://img.shields.io/badge/Styled%20with-TailwindCSS-38b2ac.svg)](https://tailwindcss.com/)
[![Formatted & Linted with Biome](https://img.shields.io/badge/Formatted%20with-Biome-60a5fa.svg)](https://biomejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178c6.svg)](https://www.typescriptlang.org/)

A modern, cross-browser extension template using Vite for lightning-fast HMR, Preact for a lightweight UI, TypeScript for type safety, TailwindCSS for utility-first styling, and Biome for formatting and linting. Designed for rapid development and easy building for both Chrome and Firefox.

## ✨ Features

- ⚡️ **Vite:** Next-generation frontend tooling with blazing fast Hot Module Replacement (HMR).
- ⚛️ **Preact:** Fast, 3kB alternative to React with the same modern API.
- 🔒 **TypeScript:** Static typing for robust and maintainable code.
- 🎨 **TailwindCSS:** Utility-first CSS framework for rapid UI development.
- 🧹 **Biome:** Integrated formatter and linter for consistent code style.

- 🦊 **Cross-Browser Support:** Easy Chrome and Firefox bundling thanks to [@crxjs/vite-plugin](https://github.com/crxjs/chrome-extension-tools).

## 📂 Project Structure

```
.
├── public/                 # Static assets (icons, etc.)
├── src/
│   ├── background.ts       # Background service worker
│   ├── index.css           # Global styles (Tailwind base)
│   ├── assets/             # Other static assets used in code
│   ├── components/         # Shared UI components (Preact)
│   ├── content/            # Content script files
│   │   ├── content.tsx     # Content script logic
│   │   ├── index.tsx       # Entry point for content script UI
│   │   └── style.css       # Styles specific to content script UI
│   ├── lib/                # Utility functions
│   │   └── utils/
│   │       ├── browser.ts  # Browser API helpers
│   │       ├── dom.ts      # DOM manipulation helpers
│   │       └── tailwind.ts # Tailwind merge helper
│   └── popup/              # Popup page files
│       ├── index.html      # Popup HTML entry
│       ├── index.tsx       # Popup script entry
│       └── popup.tsx       # Main Popup component
```

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/anjerodev/cross-browser-extension-template.git
    cd chrome-extension-boilerplate
    ```
2.  **Install dependencies:**
    ```bash
    bun install
    # or npm install or yarn install
    ```
3.  **Start the development extension (for Chrome):**
    ```bash
    bun run dev
    ```
4.  **Load the extension in Chrome:**
    - Open Chrome and navigate to `chrome://extensions`.
    - Enable "Developer mode" (top right).
    - Click "Load unpacked".
    - Select the `dist_chrome` directory.

## 🛠️ Available Scripts

- `bun run dev`: Starts the development server for Chrome with HMR.
- `bun run build:chrome`: Builds the extension for Chrome (output in `dist_chrome`).
- `bun run build:firefox`: Builds the extension for Firefox (output in `dist_firefox`).
- `bun run build:watch`: Builds the extension for Chrome and watches for changes.
- `bun run build`: Builds for both Chrome and Firefox, then zips the outputs into the `extension` folder.
- `bun run zip`: (macos) Zips the `dist_chrome` and `dist_firefox` directories (requires prior build).
- `bun run format`: Formats the codebase using Biome.
- `bun run format:check`: Checks formatting using Biome without applying changes.

## 📦 Building for Production

To create production-ready builds for Chrome and Firefox:

```bash
bun run build
```

This command will:

1.  Build the extension for Chrome into the `dist_chrome` directory.
2.  Build the extension for Firefox into the `dist_firefox` directory.
3.  Create zip archives (`chrome.zip`, `firefox.zip`) in the `extension` directory, ready for submission to the respective web stores.

## ✨ Linting and Formatting

This boilerplate uses [Biome](https://biomejs.dev/) for code formatting and linting.

- **Format code:** `bun run format`
- **Check formatting:** `bun run format:check`

Configuration is defined in `biome.json`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
