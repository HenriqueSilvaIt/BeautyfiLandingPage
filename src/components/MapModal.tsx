// src/components/MapModal.tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  latitude: number;
  longitude: number;
  companyName: string;
}

export default function MapModal({ isOpen, onClose, latitude, longitude, companyName }: MapModalProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    if ((window as any).L) {
      setLoaded(true);
      return;
    }

    // Load Leaflet stylesheet dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    link.id = "leaflet-css";
    if (!document.getElementById("leaflet-css")) {
      document.head.appendChild(link);
    }

    // Load Leaflet script dynamically
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.id = "leaflet-js";
    script.onload = () => setLoaded(true);
    if (!document.getElementById("leaflet-js")) {
      document.head.appendChild(script);
    } else {
      setLoaded(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!loaded || !isOpen || !mapRef.current) return;

    const L = (window as any).L;
    if (!L) return;

    // Initialize Leaflet map
    const map = L.map(mapRef.current).setView([latitude, longitude], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(`<b>${companyName}</b>`)
      .openPopup();

    return () => {
      map.remove();
    };
  }, [loaded, isOpen, latitude, longitude, companyName]);

  if (!isOpen) return null;

  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <div style={modalHeaderStyle}>
          <h3 style={{ color: "#092D5D", margin: 0, fontWeight: 700 }}>Localização</h3>
          <button style={closeButtonStyle} onClick={onClose} aria-label="Fechar">✕</button>
        </div>
        <p style={{ color: "#64748b", fontSize: "14px", margin: "0 0 16px 0" }}>
          {companyName} está situado nas coordenadas [{latitude}, {longitude}].
        </p>
        <div ref={mapRef} style={{ height: "350px", width: "100%", borderRadius: "8px", border: "1px solid #e2e8f0" }} />
      </div>
    </div>
  );
}

const modalOverlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(9, 45, 93, 0.4)",
  backdropFilter: "blur(8px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  padding: "24px",
  borderRadius: "16px",
  width: "90%",
  maxWidth: "550px",
  boxShadow: "0 10px 25px -5px rgba(9, 45, 93, 0.2)",
  border: "1px solid #FAF8EF",
};

const modalHeaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
};

const closeButtonStyle: React.CSSProperties = {
  border: "1px solid #e2e8f0",
  background: "#FAF8EF",
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#092D5D",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "14px",
  transition: "background-color 0.15s ease",
};
