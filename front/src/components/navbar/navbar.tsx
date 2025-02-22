"use client";

import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileOptions = [
    { label: "Búsqueda", icon: "/icons/lupa.png", link: "/tareas" },
    { label: "Contrata", icon: "/icons/hands.png", link: "/contrata" },
    { label: "Historia", icon: "/icons/doc.png", link: "/historia" },
    { label: "Soporte", icon: "/icons/call.png", link: "/soporte" },
    { label: "Perfil", icon: "/icons/user.png", link: "/perfil" },
  ];

  return (
    <nav className={`${styles.navbar} ${isMobile ? styles.mobile : ""}`}>
      {isMobile ? (
        <div className={styles.mobileTabs}>
          {mobileOptions.map((option, index) => (
            <Link key={index} href={option.link} className={styles.mobileTab}>
              <div>
                <img src={option.icon} alt={option.label} className={styles.icon} />
                <span>{option.label}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className={styles.navbarLinks}>
          {(isLoggedIn
            ? [
                { label: "Búsqueda", link: "/tareas" },
                { label: "Contrata", link: "/contrata" },
                { label: "Categorías", link: "/categorias" },
                { label: "Soporte", link: "/soporte" },
                { label: "Mensajes", link: "/mensajes" },
                { label: "Perfil", link: "/perfil" },
              ]
            : [
                { label: "Publicar tarea", link: "/publicar-tarea" },
                { label: "Ver tareas", link: "/tareas" },
                { label: "Cómo Funciona", link: "/about" },
                { label: "Registrarte", link: "/registrarte" },
                { label: "Iniciar sesión", link: "/inicio_sesion" },
              ]
          ).map((option, index) => (
            <Link key={index} href={option.link} className={styles.link}>
              {option.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
