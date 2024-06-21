import { DeleteAccount } from "../components/sections/delete-account/DeleteAccount.jsx";
import { Hero } from "../components/sections/Hero.jsx";
import { useTranslation } from "react-i18next";

export default function Home() {
  const {t} = useTranslation();

  return (
    <div className="min-h-[100dvh] bg-whit text-white">
        <Hero />
        <DeleteAccount />
    </div>
  );
}
