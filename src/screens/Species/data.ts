import images from "../../images";

const slides = [
  {
    text: "Galactic Ape",
    avatar: images.species.figure5,
    globe: images.species.globe3,
  },
  {
    text: "Coming soon",
    avatar: images.species.figure1,
    globe: images.species.globe4,
  },
  {
    text: "Coming soon",
    avatar: images.species.figure2,
    globe: images.species.globe3,
  },
  {
    text: "Coming soon",
    avatar: images.species.figure3,
    globe: images.species.globe2,
  },
  {
    text: "Coming soon",
    avatar: images.species.figure4,
    globe: images.species.globe1,
  },
];

const createSlides = () => {
  let arr: any = [];

  for (let i = 0; i < 4; i++) {
    arr = [...arr, ...slides];
  }
  return arr;
};

const speciesSlides = createSlides();

export { speciesSlides };
