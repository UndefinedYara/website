import trill2 from "./images/trill2.png";
import easy1 from "./images/easy1.png";
import pic2 from "./images/pic2.png";
import pick1 from "./images/pick1.png";

export const content = [
  {
    id: 0,
    title: "Trill",
    link: "https://github.com/undefinedyara/trill-desktop",
    image: trill2,
    description:
      "A guitar's player best friend! Look up chords using the fretboard and find new chord positions in the chord library.",
    scope: "Full-stack",
    skills: ["NextJS", "NestJS", "Prisma ORM", "Tailwind CSS"],
    status: "WIP",
  },
  {
    id: 1,
    title: "E-commerce Web Store",
    link: "",
    image: easy1,
    description:
      "One of many variations of a web-store for a client. Color schemes, menus, and product layouts are fully customizable by the shop owner.",
    scope: "Front-End",
    skills: ["HTML", "CSS", "Vanilla JS"],
  },
  {
    id: 2,
    title: "PictureThis",
    image: pic2,
    link: "https://github.com/undefinedyara/picturethis",
    description:
      "This is my take on a Graphical Password authentication layer. intended to add an additional layer of security to your standard username and password combo while also being easier to remember than other text-based verification methods like security questions, etc.",
    scope: "Full-Stack",
    skills: ["Spring Boot", "SQL", "Typescript", "Angular"],
  },

  {
    id: 3,
    title: "Pick-a-Color",
    image: pick1,
    link: "https://github.com/undefinedyara/pick-a-color",
    description:
      "Pick a color from any pixel on your screen, change hue, opacity or pick an entirely different color. Compatible with Chrome, Edge and Opera. Coming soon to Chrome Extension Store!",
    scope: "Browser Extension",
    skills: ["JavaScript", "EyeDropper API", "CSS"],
  },
];
