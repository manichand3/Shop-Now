# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

shopping-hub/
│
├── public/
│ └── index.html
│
├── src/
│
│ ├── assets/ # Images, icons, fonts
│ │ └── logo.png
│
│ ├── components/ # Reusable UI components
│ │ ├── ProductCard.jsx
│ │ ├── Loader.jsx
│ │ └── Navbar.jsx
│
│ ├── features/ # Redux Toolkit feature slices
│ │ ├── cart/
│ │ │ ├── cartSlice.js
│ │ │ └── CartPage.jsx
│ │ ├── products/
│ │ │ ├── productSlice.js
│ │ │ └── ProductList.jsx
│ │ └── auth/
│ │ ├── authSlice.js
│ │ └── LoginPage.jsx
│
│ ├── pages/ # Page-level components (for routes)
│ │ ├── Home.jsx
│ │ ├── Cart.jsx
│ │ ├── Login.jsx
│ │ └── NotFound.jsx
│
│ ├── layouts/ # Layouts for public/private pages
│ │ ├── MainLayout.jsx
│ │ └── AuthLayout.jsx
│
│ ├── router/ # React Router config
│ │ └── AppRouter.jsx
│
│ ├── services/ # API calls (Axios or fetch)
│ │ ├── productAPI.js
│ │ └── authAPI.js
│
│ ├── hooks/ # Custom hooks (optional)
│ │ └── useDebounce.js
│
│ ├── store/ # Redux store setup
│ │ └── store.js
│
│ ├── App.jsx # Root component
│ ├── index.css # Tailwind CSS
│ └── main.jsx # React entry point
│
├── tailwind.config.js
├── package.json
└── README.md
