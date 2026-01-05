import {
  BeakerIcon,
  HomeIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  MusicalNoteIcon,
  ShoppingBagIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";


import ProductHighlight from "./components/ProductHighlight.jsx"
import ProductCategory from "./components/ProductCategory.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
function App() {
  return (
    <>
      <Navbar />
      {/* 🛠️ Todo 2: ให้สร้าง Component ProductHighlight แล้วนำมา Render */}
      <ProductHighlight />
      {/* 🛠️ Todo 3: ให้สร้าง Component ProductCategory แล้วนำมา Render */}
      <ProductCategory />
      {/* 🛠️ Todo 4: ให้สร้าง Component Footer แล้วนำมา Render */}
      <Footer />
    </>
  );
}

export default App;
