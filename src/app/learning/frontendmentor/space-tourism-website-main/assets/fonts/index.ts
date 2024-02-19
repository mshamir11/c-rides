import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";

const bellefair = Bellefair({
  weight: ["400"],
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "800"],
  subsets: ["latin"],
});

const barlowRegular = Barlow({
  weight: ["400"],
  subsets: ["latin"],
});

export { bellefair, barlowCondensed, barlowRegular };
