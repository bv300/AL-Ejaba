import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "interior",
    code: "01 / INT",
    title: "Interior Design",
    description:
      "Full interior design and technical consultation, shaping spaces around how our clients actually live.",
    points: ["Concept & 3D design", "Material & finish selection", "Turnkey fit-out execution"],
  },
  {
    id: "fitout",
    code: "02 / FIT",
    title: "Fit-Out & Refurbishment",
    description:
      "Skilled workmen deliver fit-out and refurbishment works for villas, offices, retail and F&B spaces.",
    points: ["Residential fit-out", "Commercial & retail fit-out", "Kitchen & restaurant works"],
  },
  {
    id: "landscape",
    code: "03 / LND",
    title: "Landscaping",
    description:
      "Landscape design and build for villas and communities — from planting plans to swimming pools and play areas.",
    points: ["Landscape design & build", "Swimming pools & play areas", "Villa extensions"],
  },
  {
    id: "maintenance",
    code: "04 / MEP",
    title: "Facility Management",
    description:
      "A dedicated maintenance team providing timely support and MEP works to every project we hand over.",
    points: ["Plumbing & electrical", "Mechanical maintenance", "Ongoing facility support"],
  },
];
