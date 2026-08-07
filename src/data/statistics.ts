export interface Statistic {
  id: string;
  value: number;
  prefix?: string;
  suffix: string;
  label: {
    ar: string;
    en: string;
  };
  iconName: string;
}

export const statisticsData: Statistic[] = [
  {
    id: "clients",
    value: 185,
    suffix: "+",
    label: {
      ar: "مشروع ناجح وعميل متفاعل",
      en: "Successful Projects & Active Clients"
    },
    iconName: "Briefcase"
  },
  {
    id: "revenue-generated",
    value: 45,
    prefix: "$",
    suffix: "M+",
    label: {
      ar: "إجمالي إيرادات المحققة لعملائنا",
      en: "Total Client Revenue Generated"
    },
    iconName: "TrendingUp"
  },
  {
    id: "roi-average",
    value: 380,
    suffix: "%",
    label: {
      ar: "متوسط عائد الاستثمار الإعلاني (ROAS)",
      en: "Average Client ROI Multiplier"
    },
    iconName: "Zap"
  },
  {
    id: "awards",
    value: 24,
    suffix: "",
    label: {
      ar: "جائزة إبداعية في التصميم والتسويق",
      en: "International Creative & Growth Awards"
    },
    iconName: "Award"
  }
];
