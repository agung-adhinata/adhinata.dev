export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  year: number;
  role: string;
  collaboration: string;
  description: string;
  tags: string[];
  links?: ProjectLink[];
}

export const PROJECTS: Project[] = [
  {
    id: "bye-cheating",
    title: "Bye-Cheating Application",
    year: 2025,
    role: "Frontend Developer",
    collaboration:
      "Under development by a collaborative team; frontend designed & developed by myself.",
    description:
      "Web-based application designed to assist educators in monitoring classroom exams through existing CCTV infrastructure. By integrating a YOLO-based machine learning model adapted from previous senior research.",
    tags: ["React / Web", "Computer Vision", "YOLO", "Frontend Architecture", "Exam Proctoring"],
    links: [
      // TODO: Replace with your actual URLs
      { label: "Source Code", url: "https://github.com/Kitastack/bye-cheating/" },
    ],
  },
  {
    id: "edusign",
    title: "EduSign - ASL Translation App",
    year: 2024,
    role: "Android Developer & UI Design Collaborator",
    collaboration: "Designed & developed by a collaborative team (Bangkit C241-PS015).",
    description:
      "Android application designed to bridge communication gaps between deaf users who know American Sign Language (ASL) and those who do not. Continuously transcribes ASL gestures captured via the device's camera into clear, readable text in real time using machine learning and cloud technologies, along with ASL learning features.",
    tags: ["Android", "Kotlin", "Machine Learning", "Cloud", "Computer Vision", "UI/UX Design"],
    links: [
      // TODO: Replace with your actual URLs
      { label: "Source Code", url: "https://github.com/Bangkit-WSLTA-Capstone/mobile-edusign" },
      { label: "Figma", url: "https://www.figma.com/design/wWSe8f7WPYNFoFngfBKUvh/UI-UX-Edusign" },
    ],
  },
  {
    id: "rinjani-visitor",
    title: "Rinjani Visitor App",
    year: 2023,
    role: "Flutter Developer",
    collaboration: "Designed & developed by a collaborative team.",
    description:
      "A tourism mobile app developed using Flutter for promoting local ecotourism in Mount Rinjani, Lombok. Connects tourists with local service providers in Senaru Village, offering booking features for travel packages, accommodations, and mountain hiking tours.",
    tags: ["Flutter", "Dart", "Mobile App", "Tourism Booking", "Ecotourism"],
    links: [
      // TODO: Replace with your actual URLs
      { label: "Source Code", url: "https://github.com/rinjani-visitor/rinjani-visior-flutter" },
    ],
  },
  {
    id: "astel-finance",
    title: "Astel – Personal Finance Manager",
    year: 2023,
    role: "Fullstack Developer",
    collaboration: "Designed & developed by a collaborative team.",
    description:
      "Personal finance manager app that lets users effortlessly record income and expenses, categorize entries on the fly, generate and print detailed monthly reports, and apply custom date/group filters.",
    tags: ["PHP", "MySQL", "Fullstack", "Financial Management", "Reporting"],
    links: [
      // TODO: Replace with your actual URLs
      { label: "Source Code", url: "https://github.com/agung-adhinata/astel-php" },
    ],
  },
  {
    id: "battleship-cli",
    title: "Battleship Board Game CLI",
    year: 2022,
    role: "C++ Developer",
    collaboration: "Designed & developed by myself (solo).",
    description:
      "Two-player strategy board game built inside a Command Line Interface (CLI) where the objective is to sink your opponent's fleet of ships before they sink yours.",
    tags: ["C++", "CLI", "Game Logic", "Algorithms"],
    links: [
      // TODO: Replace with your actual URLs
      { label: "Source Code", url: "https://github.com/agung-adhinata/cpp-battleshipgame-cli" },
    ],
  },
];
