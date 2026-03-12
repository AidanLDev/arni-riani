import instagramIcon from "../assets/images/socials/InstagramCircle.webp";
import xIcon from "../assets/images/socials/x_icon.webp";
import tiktokIcon from "../assets/images/socials/TikTokLogo.webp";
import linkedinIcon from "../assets/images/socials/LinkedInLogoRound.webp";

interface ISocialLink {
  image: string;
  link: string;
  userName?: string;
}

export const socialLinks: ISocialLink[] = [
  {
    image: instagramIcon,
    link: "https://www.instagram.com/mynameisarni/",
  },
  {
    image: xIcon,
    link: "https://twitter.com/MyNameIsArni",
  },
  {
    image: tiktokIcon,
    link: "https://www.tiktok.com/@mynameisarni",
  },
  {
    image: linkedinIcon,
    link: "https://www.linkedin.com/in/arni-riani-012174162/",
  },
];
