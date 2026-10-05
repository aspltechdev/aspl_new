# ASPL Tech Solutions website

React and Vite website for ASPL Tech Solutions, focused on web development, app development, and digital marketing.

## Project structure

- `src/pages/Home.jsx` assembles the homepage sections.
- `src/pages/Home.css` styles the homepage wrapper only.
- Each homepage section lives directly in `src/` as a JSX/CSS pair: `AboutSection`, `ServicesSection`, `ApproachSection`, `PartnersSection`, and `ContactSection`.
- Shared navigation, hero, service card, and footer components are in `src/components/`. Each component imports its own stylesheet.
- `src/data/content.js` contains company details, service descriptions, partner names, and About copy.
- `src/assets/` contains the logo, service illustrations, and partner logos.
- `src/App.css` styles the application shell. The app does not import a global stylesheet; `main.jsx` applies only the page's zero-margin and minimum-width reset.

## Run locally

1. Install Node.js.
2. In this folder, run `npm install`.
3. Run `npm run dev` to preview the website.
4. Run `npm run build` to create a production build in `dist/`.

## Update content

Edit `src/data/content.js` for company details, services, partners, and About copy. Each section's content and styling are in its matching JSX/CSS pair at the top level of `src/`.
