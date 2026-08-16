import { NavLink, Project } from "@/types";

export const site = {
  name: "AL EJABA AL SAREEA",
  legalName: "Al Ejaba Al Sareea Technical Services L.L.C",
  shortName: "Al Ejaba Tech",
  tagline: "Interior design & fit-out consultants",
  description:
    "Interior design consultants and technical services contractor based in Dubai, with a large portfolio of villas, landscapes and commercial fit-outs across the UAE.",
  phone1: "+971 55 955 2180",
  phone2: "+971 58 996 2180",
  email: "info@ejaba.ae",
  altEmail: "alejabatech@gmail.com",
  contact: "Bushra Obaid Mohammad",
  address: "Naif, Deira - Dubai - U.A.E",
  whatsapp: "971559552180", // Used for wa.me links
  instagram: "https://instagram.com", // Replace with actual Instagram URL
  mapsLink: "https://maps.google.com/?q=Naif, Deira - Dubai - U.A.E",
  url: "https://www.ejaba.ae",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
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