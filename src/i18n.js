import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "destinations": "Destinations",
      "tours": "Tours",
      "about": "About Us",
      "contact": "Contact",
      "hero_title": "Discover Your Next Adventure",
      "hero_subtitle": "Explore the world's most breathtaking destinations with our curated travel packages.",
      "explore_now": "Explore Now",
      "popular_destinations": "Popular Destinations",
      "featured_tours": "Featured Tours",
      "why_choose_us": "Why Choose Us?",
      "footer_text": "© 2026 Wanderlust Travel Agency. All rights reserved."
    }
  },
  es: {
    translation: {
      "home": "Inicio",
      "destinations": "Destinos",
      "tours": "Tours",
      "about": "Sobre Nosotros",
      "contact": "Contacto",
      "hero_title": "Descubre Tu Próxima Aventura",
      "hero_subtitle": "Explora los destinos más impresionantes del mundo con nuestros paquetes de viaje seleccionados.",
      "explore_now": "Explorar Ahora",
      "popular_destinations": "Destinos Populares",
      "featured_tours": "Tours Destacados",
      "why_choose_us": "¿Por Qué Elegirnos?",
      "footer_text": "© 2026 Wanderlust Agencia de Viajes. Todos los derechos reservados."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
