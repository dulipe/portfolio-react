
import secretWord from "../assets/secretWord.gif";
import geoChallenge from "../assets/geoChallenge.mp4";

const projects = [
  {
    title: "Secret Word",
    description:
      "A word-guessing game where you discover the secret word through color-coded letter feedback, one guess at a time.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vitest", "Testing Library", "Context API"],
    github: "https://github.com/dulipe/secretWord",
    live: "https://secretword.filipe-santos.dev/",
    image: secretWord,
  },

  {
    title: "Geo Challenge",
    description:
      "A geography interactive game where you identify countries by their flags and location on the map. Originally built for mobile in Unity, currently being ported to WebGL.",
    stack: ["Node.js", "Express", "MongoDB", "WebGL", "Unity", "C#"],
    github: "#",
    live: "#",
    video: geoChallenge,
    comingSoon: true,
  }
];

export default projects;