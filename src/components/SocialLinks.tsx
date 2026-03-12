import { socialLinks } from "../constants/socialLinks";

function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.link}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-75"
        >
          <img
            src={social.image}
            alt=""
            className="h-8 w-8 rounded-full object-cover"
          />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
