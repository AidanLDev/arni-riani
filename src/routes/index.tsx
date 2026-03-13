import { createFileRoute } from "@tanstack/react-router";
import Title from "../components/ui/Title";
import SocialLinks from "../components/SocialLinks";
import heroImage from "../assets/images/Aidan_Arni_Bromo.webp";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="flex flex-col items-center px-4 py-12">
      <img
        src={heroImage}
        alt="Arni and Aidan at Mount Bromo"
        className="mb-8 w-full max-w-lg rounded-2xl shadow-lg object-cover"
      />
      <Title text="Arni Riani" />
      <p className="mt-4 max-w-md text-center text-lg text-gray-600 dark:text-gray-400">
        My name is Arni, I love nature, hiking and travelling to new places.
      </p>
      <p className="mt-3 text-center text-gray-600 dark:text-gray-400">
        From Indonesia 🇮🇩 · Currently living in the UK 🇬🇧
      </p>
      <hr className="my-6 w-24 border-t-2 border-gray-300 dark:border-gray-600" />
      <SocialLinks />
    </div>
  );
}
