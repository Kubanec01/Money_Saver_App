import { t } from "i18next";

type ExplainDataType = {
  id: number;
  number: number;
  title: string;
  desc: string;
};

export const ExplainData = () => {

  const explainData: ExplainDataType[] = [
    {
      id: 1,
      number: 1,
      title: t("explainData.1.title"),
      desc: t("explainData.1.desc"),
    },
    {
      id: 2,
      number: 2,
      title: t("explainData.2.title"),
      desc: t("explainData.2.desc"),
    },
    {
      id: 3,
      number: 3,
      title: t("explainData.3.title"),
      desc: t("explainData.3.desc"),
    },
    {
      id: 4,
      number: 4,
      title: t("explainData.4.title"),
      desc: t("explainData.4.desc"),
    },
  ];

  return explainData;
};
