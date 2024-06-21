
export const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "ar",
      name: "العربية",
      dir: "rtl",
      country_code: "sa",
    },
  ];
  
export const api = import.meta.env.VITE_STATUS === "DEV" ? import.meta.env.VITE_DEV_API : import.meta.env.VITE_PROD_API;