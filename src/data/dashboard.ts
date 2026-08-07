export interface DashboardMetric {
  id: string;
  title: { ar: string; en: string };
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}

export interface RevenueChartData {
  month: string;
  revenue: number;
  adSpend: number;
  leads: number;
}

export interface RecentCampaign {
  id: string;
  name: string;
  client: string;
  platform: 'Google' | 'Meta' | 'TikTok' | 'LinkedIn';
  budget: string;
  spent: string;
  conversions: number;
  roas: string;
  status: 'Active' | 'Optimizing' | 'Completed';
}

export interface RecentActivity {
  id: string;
  user: string;
  avatar: string;
  action: { ar: string; en: string };
  timestamp: string;
  type: 'lead' | 'campaign' | 'payment' | 'system';
}

export interface DashboardNotification {
  id: string;
  title: { ar: string; en: string };
  time: string;
  unread: boolean;
}

export const dashboardMetrics: DashboardMetric[] = [
  {
    id: "revenue",
    title: { ar: "إجمالي الأرباح الشهرية", en: "Monthly Total Revenue" },
    value: "$428,500",
    change: "+28.4%",
    trend: "up",
    icon: "DollarSign"
  },
  {
    id: "campaigns",
    title: { ar: "الحملات النشطة", en: "Active Campaigns" },
    value: "34",
    change: "+6",
    trend: "up",
    icon: "Target"
  },
  {
    id: "leads",
    title: { ar: "العملاء المحتملون الجدد", en: "New Qualified Leads" },
    value: "2,840",
    change: "+18.2%",
    trend: "up",
    icon: "Users"
  },
  {
    id: "roas",
    title: { ar: "متوسط عائد الإعلانات (ROAS)", en: "Average Agency ROAS" },
    value: "4.85x",
    change: "+0.65x",
    trend: "up",
    icon: "TrendingUp"
  }
];

export const revenueChartData: RevenueChartData[] = [
  { month: "Jan", revenue: 210000, adSpend: 45000, leads: 1200 },
  { month: "Feb", revenue: 245000, adSpend: 52000, leads: 1450 },
  { month: "Mar", revenue: 280000, adSpend: 58000, leads: 1700 },
  { month: "Apr", revenue: 310000, adSpend: 62000, leads: 1950 },
  { month: "May", revenue: 365000, adSpend: 71000, leads: 2300 },
  { month: "Jun", revenue: 390000, adSpend: 75000, leads: 2550 },
  { month: "Jul", revenue: 428500, adSpend: 82000, leads: 2840 },
];

export const recentCampaigns: RecentCampaign[] = [
  {
    id: "cmp-1",
    name: "Nova Coffee Beans Subscription",
    client: "Nova Coffee Roasters",
    platform: "Meta",
    budget: "$12,000",
    spent: "$8,450",
    conversions: 840,
    roas: "5.2x",
    status: "Active"
  },
  {
    id: "cmp-2",
    name: "Sky Dental Implant Search Ads",
    client: "Sky Dental",
    platform: "Google",
    budget: "$25,000",
    spent: "$19,200",
    conversions: 320,
    roas: "6.8x",
    status: "Active"
  },
  {
    id: "cmp-3",
    name: "Urban Homes Luxury Villas Launch",
    client: "Urban Homes",
    platform: "LinkedIn",
    budget: "$40,000",
    spent: "$36,000",
    conversions: 185,
    roas: "4.1x",
    status: "Optimizing"
  },
  {
    id: "cmp-4",
    name: "Alpha Fin Mobile App CPI",
    client: "Alpha Finance",
    platform: "TikTok",
    budget: "$18,000",
    spent: "$18,000",
    conversions: 1420,
    roas: "3.9x",
    status: "Completed"
  }
];

export const recentActivities: RecentActivity[] = [
  {
    id: "act-1",
    user: "Fahad Al-Dossary",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100&auto=format&fit=crop",
    action: {
      ar: "قام بتعديل ميزانية حملة Nova Coffee وتزويد العائد بـ 15%",
      en: "Scaled Nova Coffee Meta Campaign budget by +15%"
    },
    timestamp: "قبل 10 دقائق / 10m ago",
    type: "campaign"
  },
  {
    id: "act-2",
    user: "Omar Al-Salim",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
    action: {
      ar: "تم ربط شات بوت WhatsApp AI لمركز Sky Dental بنجاح",
      en: "Deployed AI WhatsApp Bot node for Sky Dental clinic"
    },
    timestamp: "قبل 45 دقيقة / 45m ago",
    type: "system"
  },
  {
    id: "act-3",
    user: "System AI Agent",
    avatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=100&auto=format&fit=crop",
    action: {
      ar: "تم استلام دفعة بقيمة $14,500 من شركة Urban Homes",
      en: "Invoice #INV-2026-88 paid ($14,500) by Urban Homes"
    },
    timestamp: "قبل 2 ساعة / 2h ago",
    type: "payment"
  }
];

export const dashboardNotifications: DashboardNotification[] = [
  {
    id: "notif-1",
    title: {
      ar: "تجاوزت حملة Google Ads الخاصة بشركة Sky Dental هدف العائد المخطط (ROAS 6.8x)",
      en: "Sky Dental Search campaign exceeded target ROAS milestone (6.8x)"
    },
    time: "الآن / Just now",
    unread: true
  },
  {
    id: "notif-2",
    title: {
      ar: "تم تسجيل 45 مستثمر جديد عبر صفحة هبوط Urban Homes 3D",
      en: "45 new HNW investor leads registered via Urban Homes 3D portal"
    },
    time: "قبل ساعة / 1h ago",
    unread: true
  },
  {
    id: "notif-3",
    title: {
      ar: "تذكير: اجتماع التخطيط الأسبوعي مع فريق الفخامة الساعة 4:00 مساءً",
      en: "Reminder: Weekly Enterprise Growth Sync at 4:00 PM"
    },
    time: "قبل 3 ساعات / 3h ago",
    unread: false
  }
];
