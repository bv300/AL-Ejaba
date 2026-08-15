import { NavLink, Project } from "@/types";

export const site = {
  name: "AL EJABA AL SAREEA",
  legalName: "Al Ejaba Al Sareea Technical Services L.L.C",
  shortName: "AAJLTES",
  tagline: "Interior design & fit-out consultants",
  description:
    "Interior design consultants and technical services contractor based in Dubai, with a large portfolio of villas, landscapes and commercial fit-outs across the UAE.",
  phone1: "+971 55 955 2180",
  phone2: "+971 58 996 2180",
  email: "info@aajlaebjaba.ae",
  contact: "Bushra Obaid Mohammad",
  address: "Naif, Deira - Dubai - U.A.E",
  url: "https://www.aajlaebjaba.ae",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Sourced from the company's project ledger / portfolio
export const projects: Project[] = [
  { name: "Villa L-51", location: "Emirates Hills", value: "900,000", scope: "Landscaping & Interiors" },
  { name: "Villa 905", location: "Green Community West, DIP", value: "600,000", scope: "Landscaping, Extension & Interiors" },
  { name: "Villa 3407", location: "Green Community West, DIP", value: "1,200,000", scope: "Landscaping, Extension & Interiors" },
  { name: "Villa 2005", location: "Green Community West, DIP", value: "550,000", scope: "Landscaping, Extension & Interiors" },
  { name: "Villa 1106", location: "Green Community West, DIP", value: "320,000", scope: "Landscaping, Extension & Interiors" },
  { name: "Villa 3114", location: "Green Community West, DIP", value: "230,000", scope: "Landscaping, Extension & Interiors" },
  { name: "Villa 4034", location: "Green Community West, DIP", value: "355,000", scope: "Landscaping, Extension & Interiors" },
  { name: "Villa 3226", location: "Green Community West, DIP", value: "245,000", scope: "Landscaping, Extension & Interiors" },
  { name: "Al Manara Villa", location: "Jumeirah II", value: "450,000", scope: "Landscaping" },
  { name: "Dubai Realestate Center", location: "DREC", value: "1,530,000", scope: "Interior Fit-out Refurbishment" },
  { name: "Dubai Realestate Center", location: "DREC", value: "1,300,000", scope: "Landscape, Pool & Play Area" },
  { name: "Villa in Al Khawaneej", location: "Al Khawaneej", value: "628,000", scope: "Landscaping Works" },
];

export const featuredVillas = [
  "Ahmed Lootah Villa",
  "Mona Khawaneej Villa",
  "Saeed Khawaneej Villa",
  "Salem Al Zaabi Villa",
  "Salem Kathiri Villa — Arabian Ranches II",
  "H.H. Sheikh Ghada Villa — Sharjah",
  "Hammad Ketbi Villa — Margham",
  "Diwan Al Ameeri — Govt. of U.A.Q.",
  "Etisalat Academy — Muhaisnah",
  "Al Waleed Real Estate Tower — DHCC",
  "Coco Villa — Hattan III",
  "Mickey — Mirador, Arabian Ranches I",
  "Henrik Villa — Al Mahra",
  "Trinity Villa — Saheel",
  "Lamees Amba Villa — Victory Heights",
  "Dr. Anand — L51, Emirates Hills",
];
