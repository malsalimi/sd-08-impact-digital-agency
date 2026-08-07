export interface Client {
  id: string;
  name: string;
  category: string;
  logoText: string;
}

export const clientsData: Client[] = [
  { id: "1", name: "Nova Coffee", category: "Specialty Coffee", logoText: "NOVA COFFEE" },
  { id: "2", name: "Sky Dental", category: "Healthcare", logoText: "SKY DENTAL" },
  { id: "3", name: "Urban Homes", category: "Real Estate", logoText: "URBAN HOMES" },
  { id: "4", name: "Alpha Finance", category: "Fintech", logoText: "ALPHA FIN" },
  { id: "5", name: "Green Farm", category: "D2C Organics", logoText: "GREEN FARM" },
  { id: "6", name: "Vortex Gaming", category: "Esports & Tech", logoText: "VORTEX" },
  { id: "7", name: "Aura Luxury", category: "Fashion & Jewelry", logoText: "AURA LUXE" },
  { id: "8", name: "Lumina Solar", category: "Clean Energy", logoText: "LUMINA" }
];
