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
      "stats_happy_travelers": "Happy Travelers",
      "stats_destinations": "Destinations",
      "stats_experience": "Years Experience",
      "stats_rating": "Average Rating",
      "travel_style": "Travel Style",
      "testimonials_title": "What our explorers say",
      "newsletter_title": "Get 20% off your first trip",
      "newsletter_subtitle": "Subscribe to our newsletter and receive exclusive travel deals.",
      "subscribe": "Subscribe",
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
      "stats_happy_travelers": "Viajeros Felices",
      "stats_destinations": "Destinos",
      "stats_experience": "Años de Experiencia",
      "stats_rating": "Calificación Promedio",
      "travel_style": "Estilo de Viaje",
      "testimonials_title": "Lo que dicen nuestros exploradores",
      "newsletter_title": "Obtén un 20% de descuento",
      "newsletter_subtitle": "Suscríbete a nuestro boletín y recibe ofertas exclusivas.",
      "subscribe": "Suscribirse",
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
