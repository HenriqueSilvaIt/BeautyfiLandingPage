// src/components/CompanyCard.tsx
"use client";

import { useState } from "react";
import styles from "./CompanyCard.module.css";
import { Heart } from "react-feather";

interface Service {
  name: string;
  price: string;
}

export interface Company {
  id: string;
  name: string;
  logoUrl?: string;
  rating?: number; // 0-5
  address?: string;
  services?: Service[];
  latitude?: number;
  longitude?: number;
  distanceKm?: number;
}

interface Props {
  company: Company;
  onSchedule: (companyId: string) => void;
  onViewMap?: (company: Company) => void;
}

export default function CompanyCard({ company, onSchedule, onViewMap }: Props) {
  const [favorited, setFavorited] = useState(false);
  const toggleFav = () => setFavorited(!favorited);

  const topServices = company.services?.slice(0, 3) ?? [];

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {company.logoUrl ? (
          <img src={company.logoUrl} alt={company.name} className={styles.logo} />
        ) : (
          <div className={styles.logoPlaceholder}>{company.name.charAt(0)}</div>
        )}
        <button className={styles.favBtn} onClick={toggleFav} aria-label="Favoritar empresa">
          <Heart size={20} fill={favorited ? "var(--accent)" : "none"} color={"var(--accent)"} />
        </button>
      </div>
      <h3 className={styles.name}>{company.name}</h3>
      {company.rating && (
        <div className={styles.rating}>⭐ {company.rating.toFixed(1)}</div>
      )}
      {company.address && <p className={styles.address}>{company.address}</p>}
      
      {company.distanceKm !== undefined && company.distanceKm !== null && (
        <div className={styles.distanceBadge}>
          📍 {company.distanceKm.toFixed(1)} km de distância
        </div>
      )}

      <ul className={styles.servicesList}>
        {topServices.map((svc, idx) => (
          <li key={idx} className={styles.serviceItem}>
            <span className={styles.serviceName}>{svc.name}</span>
            <span className={styles.servicePrice}>R$ {svc.price}</span>
          </li>
        ))}
      </ul>
      
      <div className={styles.actions}>
        <button className={styles.scheduleBtn} onClick={() => onSchedule(company.id)}>
          Agendar
        </button>
        {company.latitude && company.longitude && onViewMap && (
          <button className={styles.mapBtn} onClick={() => onViewMap(company)}>
            Mapa
          </button>
        )}
      </div>
    </div>
  );
}
