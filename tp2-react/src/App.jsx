import { useState } from "react";
import TodoApp from "./TodoApp/TodoApp";
import BlogApp from "./BlogApp/BlogApp";
import ShoppingListApp from "./ShoppingListApp/ShoppingListApp";
import "./App.css";

function App() {
  const [currentApp, setCurrentApp] = useState("todo");

  const renderApp = () => {
    switch (currentApp) {
      case "todo":
        return <TodoApp />;
      case "blog":
        return <BlogApp />;
      case "shopping":
        return <ShoppingListApp />;
      default:
        return <TodoApp />;
    }
  };

  return (
    <div>
      {/* Navigation Menu */}
      <nav
        style={{
          backgroundColor: "#2c3e50",
          padding: "15px 0",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            padding: "0 20px",
          }}
        >
          <button
            onClick={() => setCurrentApp("todo")}
            style={{
              padding: "12px 30px",
              backgroundColor: currentApp === "todo" ? "#3498db" : "#34495e",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: currentApp === "todo" ? "bold" : "normal",
              transition: "all 0.3s ease",
              boxShadow:
                currentApp === "todo" ? "0 4px 8px rgba(0,0,0,0.2)" : "none",
            }}
          >
            📝 Todo List
          </button>
          <button
            onClick={() => setCurrentApp("blog")}
            style={{
              padding: "12px 30px",
              backgroundColor: currentApp === "blog" ? "#3498db" : "#34495e",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: currentApp === "blog" ? "bold" : "normal",
              transition: "all 0.3s ease",
              boxShadow:
                currentApp === "blog" ? "0 4px 8px rgba(0,0,0,0.2)" : "none",
            }}
          >
            📰 Blog
          </button>
          <button
            onClick={() => setCurrentApp("shopping")}
            style={{
              padding: "12px 30px",
              backgroundColor:
                currentApp === "shopping" ? "#3498db" : "#34495e",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: currentApp === "shopping" ? "bold" : "normal",
              transition: "all 0.3s ease",
              boxShadow:
                currentApp === "shopping"
                  ? "0 4px 8px rgba(0,0,0,0.2)"
                  : "none",
            }}
          >
            🛒 Liste de Courses
          </button>
        </div>
      </nav>

      {/* Rendered Application */}
      <div>{renderApp()}</div>
    </div>
  );
}

export default App;
