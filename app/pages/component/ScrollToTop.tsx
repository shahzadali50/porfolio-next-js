"use client";
import { useEffect, useState } from "react";
import { UpOutlined } from "@ant-design/icons";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: 8,
        right: 20,
        zIndex: 1000,
        background: "#f5222d",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: 40,
        height: 40,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        transition: "opacity 0.3s",
      }}
    >
      <UpOutlined />
    </button>
  ) : null;
} 