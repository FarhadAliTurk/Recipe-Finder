import React from "react";
import "./App.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeSearch from "./components/RecipeSearch";

function App() {
  return (
    <div>
      <Header />
      <main className="container my-4">
        <RecipeSearch />
      </main>
      <Footer />
    </div>
  );
}

export default App;