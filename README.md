# AutoVerse

AutoVerse is a cutting-edge, immersive web application designed for automotive enthusiasts and buyers. It leverages modern web technologies to provide a premium car exploration experience, featuring real-time 3D vehicle models, smooth animations, and a rich, interactive user interface.

[Live Demo]() <!-- Link left blank as requested -->

## 🚀 Features

*   **Immersive 3D Experience:** Explore high-quality 3D models of vehicles using React Three Fiber and Three.js. Interact with models directly in the browser.
*   **Dynamic Animations:** Seamless transitions and micro-interactions powered by Framer Motion and GSAP. smooth scrolling implemented with Lenis.
*   **Comprehensive Car Catalog:** Browse a wide range of vehicles with detailed specifications, categorized by brands, body styles, and more.
*   **Interactive Search & Filtering:** Powerful search functionality (Command Palette style) and filters for brands and categories to find exactly what you're looking for.
*   **Wishlist Functionality:** Save your favorite vehicles to a personalized wishlist for easy access.
*   **Responsive Design:** Fully responsive layout that looks stunning on desktops, tablets, and mobile devices.
*   **Modern UI/UX:** A sleek, dark-themed interface with glassmorphism effects, staged animations, and a focus on visual hierarchy.

## 🛠️ Tech Stack

AutoVerse is built with a robust selection of modern frontend technologies:

*   **Framework:** [React](https://reactjs.org/) (v18)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** 
    *   [Tailwind CSS](https://tailwindcss.com/) (v4)
    *   `clsx` & `tailwind-merge` for dynamic class management
*   **3D & Graphics:**
    *   [Three.js](https://threejs.org/)
    *   [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
    *   [React Three Drei](https://github.com/pmndrs/drei)
    *   [OGL](https://github.com/oframe/ogl)
*   **Animations:**
    *   [Framer Motion](https://www.framer.com/motion/)
    *   [GSAP](https://greensock.com/gsap/)
    *   [Lenis](https://github.com/studio-freight/lenis) (Smooth Scroll)
*   **Routing:** [React Router DOM](https://reactrouter.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)

## 📦 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

*   **Node.js** (v16.0.0 or higher recommended)
*   **npm** or **yarn**

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/autoverse.git
    cd autoverse
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

```
AutoVerse/
├── public/              # Static assets (3D models, images, etc.)
├── src/
│   ├── components/      # Reusable React components (3D viewer, Cards, UI elements)
│   ├── context/         # React Context/Providers (if applicable)
│   ├── data/            # Static data files
│   ├── ui/              # Generic UI components
│   ├── App.jsx          # Main application component / Routes
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global styles and Tailwind directives
│   └── animationConstants.js # Shared animation configurations
├── .gitignore           # Git ignore rules
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
