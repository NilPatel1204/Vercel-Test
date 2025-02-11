 import Swiper from "swiper";
    
    // Import Swiper modules
    import { Navigation, FreeMode, Thumbs, Mousewheel, Autoplay } from "swiper/modules";
    
    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/navigation";
    import "swiper/css/free-mode";
    import "swiper/css/thumbs";

    // Wait for DOMContentLoaded event
    document.addEventListener("DOMContentLoaded", () => {
      // Initialize thumbs swiper
    
      // Initialize main swiper
      const main_swiper = new Swiper(".mySwiper", {
        modules: [Navigation, Thumbs, Mousewheel, Autoplay],
        spaceBetween: 4,
        slidesPerView: 2,
        // mousewheel: true,
        // freeMode: true,
        loop: true,
        navigation: {
          nextEl: ".slide-next",
          prevEl: ".slide-prev",
        },
        autoplay: {
          delay: 3000,
        },
        breakpoints: {
          0: {
            slidesPerView: 1, // Small screens
            spaceBetween:30,
          },
          768: {
            // Medium screens (md)
            slidesPerView: 2,
            spaceBetween: 24, // Optional spacing
          },
          1280: {
            // Large screens
            slidesPerView: 3,
            spaceBetween: 24, // Optional spacing
          },
        },
      });
    });