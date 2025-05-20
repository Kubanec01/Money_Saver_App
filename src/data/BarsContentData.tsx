import { t } from "i18next";

type BarsContentDataType = {
  id: string;
  name: string;
};

export const BarsContentData = () => {
  const barsContentData: BarsContentDataType[] = [
    {
      id: "rent",
      name: t("data.barsContentData.rent"),
    },
    {
      id: "food",
      name: t("data.barsContentData.food"),
    },
    {
      id: "car",
      name: t("data.barsContentData.car"),
    },
    {
      id: "hobby",
      name: t("data.barsContentData.hobby"),
    },
    {
      id: "fun",
      name: t("data.barsContentData.fun"),
    },
    {
      id: "other",
      name: t("data.barsContentData.other"),
    },
  ];

  return barsContentData;
};
