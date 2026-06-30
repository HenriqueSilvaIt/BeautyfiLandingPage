// src/app/companies/page.tsx
"use client";

import { useEffect, useState } from "react";
import CompanyCard, { Company } from "@/components/CompanyCard";
import MapModal from "@/components/MapModal";
import styles from "./page.module.css";

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Tabs: 'explorar' (lista geral/nome) ou 'buscar' (proximidade)
  const [activeTab, setActiveTab] = useState<"explorar" | "buscar">("explorar");

  // Explorar Tab Search
  const [nameSearch, setNameSearch] = useState("");

  // Buscar Tab Coordinates / Address Search
  const [addressInput, setAddressInput] = useState("");
  const [radius, setRadius] = useState(15); // Raio padrão de 15km
  const [geoLoading, setGeoLoading] = useState(false);

  // Map Modal control
  const [selectedCompanyForMap, setSelectedCompanyForMap] = useState<Company | null>(null);
  const [isMapOpen, setIsMapOpen] = useState(false);

  // Fetch standard list
  const fetchCompanies = async (nameQuery = "") => {
    setLoading(true);
    setError(null);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8091";
      const endpoint = nameQuery
        ? `${baseUrl}/companies?name=${encodeURIComponent(nameQuery)}`
        : `${baseUrl}/companies`;
      const resp = await fetch(endpoint);
      if (!resp.ok) throw new Error("Falha ao carregar empresas");
      const data = await resp.json();
      
      // The API returns pageable content or direct array. Let's handle both.
      if (data.content && Array.isArray(data.content)) {
        setCompanies(data.content);
      } else if (Array.isArray(data)) {
        setCompanies(data);
      } else {
        setCompanies([]);
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch nearby list using lat/lng
  const fetchNearby = async (lat: number, lng: number, searchRadius: number) => {
    setLoading(true);
    setError(null);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8091";
      const resp = await fetch(`${baseUrl}/companies/nearby?latitude=${lat}&longitude=${lng}&radius=${searchRadius}`);
      if (!resp.ok) throw new Error("Erro ao buscar estabelecimentos próximos");
      const data = await resp.json();
      setCompanies(Array.isArray(data) ? data : []);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  // Run on mount
  useEffect(() => {
    fetchCompanies();
  }, []);

  // Handle tab switch
  const handleTabChange = (tab: "explorar" | "buscar") => {
    setActiveTab(tab);
    setCompanies([]);
    setError(null);
    if (tab === "explorar") {
      fetchCompanies(nameSearch);
    } else {
      // Just clear lists, user will input location
      setLoading(false);
    }
  };

  // Search by name
  const handleNameSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchCompanies(nameSearch);
  };

  // Search by Geolocation coords
  const handleLocateMe = () => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      alert("Geolocalização não é suportada pelo seu navegador.");
      return;
    }
    setGeoLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        // Fetch from backend
        await fetchNearby(latitude, longitude, radius);
        setGeoLoading(false);
      },
      (err) => {
        console.error("Geolocation error:", err);
        alert("Não foi possível acessar sua localização. Certifique-se de dar as devidas permissões.");
        setGeoLoading(false);
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  // Search by Address text
  const handleAddressSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!addressInput.trim()) {
      alert("Digite um endereço para buscar.");
      return;
    }
    setGeoLoading(true);
    try {
      const encoded = encodeURIComponent(addressInput);
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encoded}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lng = parseFloat(data[0].lon);
        await fetchNearby(lat, lng, radius);
      } else {
        alert("Não encontramos coordenadas para o endereço digitado. Tente adicionar cidade ou estado.");
      }
    } catch (err) {
      alert("Erro ao decodificar endereço. Tente novamente ou use a opção 'Localização Atual'.");
    } finally {
      setGeoLoading(false);
    }
  };

  const handleSchedule = (companyId: string) => {
    // Navigate to scheduling or open modal
    alert(`Agendar na empresa com ID ${companyId}`);
  };

  const handleViewMap = (company: Company) => {
    setSelectedCompanyForMap(company);
    setIsMapOpen(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Encontre o seu estilo</h1>
      <p className={styles.subtitle}>Os melhores profissionais e salões perto de você.</p>

      {/* Tabs */}
      <div className={styles.tabsContainer}>
        <button
          className={`${styles.tabButton} ${activeTab === "explorar" ? styles.activeTab : ""}`}
          onClick={() => handleTabChange("explorar")}
        >
          Explorar
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "buscar" ? styles.activeTab : ""}`}
          onClick={() => handleTabChange("buscar")}
        >
          Buscar Próximos
        </button>
      </div>

      {/* Explorar Panel */}
      {activeTab === "explorar" && (
        <form onSubmit={handleNameSearchSubmit} className={styles.searchPanel}>
          <div className={styles.searchRow}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Nome do Estabelecimento</label>
              <input
                type="text"
                placeholder="ex: Dom palagani, Barbearia..."
                className={styles.input}
                value={nameSearch}
                onChange={(e) => setNameSearch(e.target.value)}
              />
            </div>
            <div className={styles.searchActions}>
              <button type="submit" className={styles.btnSearch}>
                Buscar
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Buscar Panel */}
      {activeTab === "buscar" && (
        <div className={styles.searchPanel}>
          <form onSubmit={handleAddressSearchSubmit} className={styles.searchRow}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Endereço ou Localidade</label>
              <input
                type="text"
                placeholder="ex: Avenida Paulista, São Paulo"
                className={styles.input}
                value={addressInput}
                onChange={(e) => setAddressInput(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup} style={{ flex: "0 0 120px", minWidth: "100px" }}>
              <label className={styles.label}>Raio (km)</label>
              <select
                className={styles.input}
                value={radius}
                onChange={(e) => setRadius(parseInt(e.target.value))}
              >
                <option value={5}>5 km</option>
                <option value={10}>10 km</option>
                <option value={15}>15 km</option>
                <option value={25}>25 km</option>
                <option value={50}>50 km</option>
              </select>
            </div>
            <div className={styles.searchActions}>
              <button type="submit" disabled={geoLoading} className={styles.btnSearch}>
                {geoLoading ? "Buscando..." : "Buscar Endereço"}
              </button>
              <button type="button" onClick={handleLocateMe} disabled={geoLoading} className={styles.btnSecondary}>
                📍 Usar Localização
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Results Content */}
      {loading ? (
        <p className={styles.loading}>Buscando salões e especialistas...</p>
      ) : error ? (
        <p className={styles.error}>Erro: {error}</p>
      ) : (
        <div className={styles.grid}>
          {companies.length > 0 ? (
            companies.map((c) => (
              <CompanyCard
                key={c.id}
                company={c}
                onSchedule={handleSchedule}
                onViewMap={handleViewMap}
              />
            ))
          ) : (
            <div className={styles.emptyState}>
              <h3 style={{ margin: "0 0 8px 0", color: "#092D5D" }}>Nenhum salão encontrado</h3>
              <p style={{ margin: 0, fontSize: "14px" }}>
                {activeTab === "buscar"
                  ? "Experimente aumentar o raio de distância ou buscar outra localidade."
                  : "Não encontramos resultados para sua pesquisa."}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Map Modal */}
      {selectedCompanyForMap && selectedCompanyForMap.latitude && selectedCompanyForMap.longitude && (
        <MapModal
          isOpen={isMapOpen}
          onClose={() => setIsMapOpen(false)}
          latitude={selectedCompanyForMap.latitude}
          longitude={selectedCompanyForMap.longitude}
          companyName={selectedCompanyForMap.name}
        />
      )}
    </div>
  );
}
