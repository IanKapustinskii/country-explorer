# 🌍 Country Explorer

A responsive web app that allows users to explore countries by region, search by name or capital, view detailed information, and switch between light/dark themes.

## 🚀 Features

- ✅ **Browse countries** by selected region
- 🔍 **Search functionality**:
  - Search by **country name** in multiple languages (e.g., English, German, Russian, Chinese, etc.)
  - Search by **capital name** (English only)
  - Search is scoped to the **currently selected region**
- 🌐 **Detailed country page**:
  - View flags, population, region, subregion, capital, currencies, languages, native names, and bordering countries
  - Navigate to **bordering countries**
- 🎛️ **Region filter** using a styled `<Select />` dropdown
- 🌗 **Light / Dark theme toggle**
  - Theme and region preferences are **persisted** using `localStorage`
- ↩️ **Back button** to return to region country list
- 📱 **Responsive design** with hover and focus effects for better UX

## 🧩 Technologies Used

- **React + TypeScript**
- **Vite** as the build tool
- **TanStack React Query** for efficient API data fetching and caching
- **React Router DOM** for dynamic routing and deep-linking (each country has its own URL)
- **react-select** for customizable region dropdown
- **Ionicons / @ionic/react** for icons
- **REST Countries API** ([restcountries.com](https://restcountries.com/v3.1)) for all country data

## 📂 Project Structure Highlights

- `src/components` – UI elements (cards, filters, theme toggle, etc.)
- `src/pages` – Home and country details pages
- `src/hooks` – Custom hooks for managing theme, filters, and fetching data
- `src/utils` – Helper functions for parsing country data
- `public/favicon.ico` – Custom favicon (globe icon 🌍)

## 📦 Getting Started

Clone and run the project:

```bash
git clone https://github.com/
cd country-explorer
npm install
npm run dev

🌐 Available Languages: [English](README.md) | [Deutsch](README.de.md) | [Русский](README.ru.md)