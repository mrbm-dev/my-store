import { useTranslations } from "next-intl";
import { MainLayout } from "../organism";

export function HomePage() {
  //hooks
  const translate = useTranslations("app");

  return <MainLayout title={translate("name")}></MainLayout>;
}
