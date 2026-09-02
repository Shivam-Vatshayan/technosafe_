 
import React from "react";
import "./FloatingContact.css";

export default function FloatingContact() {
  const phoneNumber = "+919813055906";

  return (
    <div className="ts-floating-contact">

      {/* =====================================================
          LEFT — PHONE
      ===================================================== */}

      <a
        href={`tel:${phoneNumber}`}
        className="ts-floating-phone"
        aria-label="Call TechnoSafe"
        title="Call +91 98130 55906"
      >
        <i className="fa-solid fa-phone"></i>
      </a>


      {/* =====================================================
          RIGHT — WHATSAPP
      ===================================================== */}

      <a
        href={`https://wa.me/${phoneNumber.replace("+", "")}`}
        className="ts-floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp TechnoSafe"
        title="WhatsApp +91 98130 55906"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

    </div>
  );
}
 
