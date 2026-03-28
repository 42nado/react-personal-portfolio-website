import Proj1 from "@/assets/proj1.png";
import Proj2 from "@/assets/proj2.png";
import Proj3 from "@/assets/proj3.jpg";
import Proj4 from "@/assets/proj4.png";
import Proj5 from "@/assets/proj5.png";
import Proj6 from "@/assets/proj6.png";
import Proj7 from "@/assets/proj7.png";
import Proj10 from "@/assets/proj10.png";

export interface Project {
  name: string;
  image: string;
  skills: string;
  link: string;
  site: string;
  description?: string;
}

export const ProjectList: Project[] = [
  {
    name: "City Wide Barangay Information System",
    image: Proj1,
    skills: "PHP, MySQL, Bootstrap, JavaScript, HTML, CSS",
    link: "",
    site: "http://manilabarangaybureau.free.nf/",
    description: "City-wide Barangay Management Information System to provide platform to the Manila Barangay Bureau in assignment of task and announcement to the barangay and help the individual barangays in their operations and functions"
  },
  {
    name: "Sari-Sari Store",
    image: Proj6,
    skills: "HTML, CSS, JavaScript, Livewire, Laravel, MySQL, Bootstrap",
    link: "",
    site: "https://store.spoonandrice.com/",
    description: "E-commerce platform for a local store"
  },
  {
    name: "Spoon and Rice",
    image: Proj10,
    skills: "HTML, CSS, JavaScript, Livewire, Laravel, Filament, MySQL, Bootstrap",
    link: "",
    site: "https://spoonandrice.com/",
    description: "Restaurant website with menu and ordering system"
  },
  {
    name: "Portfolio Website",
    image: Proj7,
    skills: "React.js, JavaScript, HTML, CSS",
    link: "https://github.com/42nado/react-personal-portfolio-website",
    site: "https://daryllfortunado.onrender.com/",
    description: "Personal portfolio website built with React"
  },
  {
    name: "Vacation Place Finder",
    image: Proj2,
    skills: "Bootstrap, Ejs, Node.js, Express.js, MongoDB",
    link: "https://github.com/42nado/RoomListing",
    site: "",
    description: "Web application for finding vacation rentals"
  },
  {
    name: "Movie Booking",
    image: Proj3,
    skills: "Visual Basic, Microsoft Access",
    link: "https://github.com/42nado/MOVIEBOOKING-Visual-Basic",
    site: "",
    description: "Desktop application for booking movie tickets"
  },
  {
    name: "QR Code Component",
    image: Proj4,
    skills: "HTML, CSS",
    link: "https://github.com/42nado/QR-code-component",
    site: "https://qrcodecomponent-frontend-mentor.netlify.app",
    description: "Frontend Mentor QR code component challenge"
  },
  {
    name: "Product Preview Card",
    image: Proj5,
    skills: "HTML, CSS",
    link: "https://github.com/42nado/Product-preview-card-component",
    site: "https://lovely-naiad-3bdad3.netlify.app/",
    description: "Frontend Mentor product preview card challenge"
  },
];
