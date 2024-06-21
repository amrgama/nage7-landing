import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import router from "./navigation/router";
import { languages } from "./constant";

export default function App() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return <RouterProvider router={router} />;
}
