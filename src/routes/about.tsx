import { createFileRoute } from "@tanstack/react-router";
import Title from "../components/Title";
import indonesiaFlag from "../assets/images/indonesia.png";
import ukFlag from "../assets/images/uk.svg";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="flex flex-col items-center px-4 py-12">
      <Title text="About Me" />
      <p className="mt-6 max-w-lg text-center text-lg text-gray-600 dark:text-gray-400">
        My name is Arni, I love nature, hiking and traveling to new places.
        There is nothing better than exploring somewhere new, breathing in fresh
        mountain air, and soaking up different cultures.
      </p>

      <hr className="my-8 w-24 border-t-2 border-gray-300 dark:border-gray-600" />

      <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
        <div className="flex flex-col items-center gap-3">
          <img
            src={indonesiaFlag}
            alt="Indonesian flag"
            className="h-16 w-24 rounded-md object-cover shadow"
          />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            From Indonesia
          </h3>
          <p className="max-w-xs text-center text-sm text-gray-500 dark:text-gray-400">
            Born and raised in the beautiful archipelago. Growing up surrounded
            by volcanoes, rice terraces and vibrant street food shaped who I am
            today.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img
            src={ukFlag}
            alt="United Kingdom flag"
            className="h-16 w-24 rounded-md object-cover shadow"
          />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Living in the UK
          </h3>
          <p className="max-w-xs text-center text-sm text-gray-500 dark:text-gray-400">
            Currently based in the United Kingdom. Enjoying the countryside
            walks, cosy pubs and the endless excuse to drink tea.
          </p>
        </div>
      </div>

      <hr className="my-8 w-24 border-t-2 border-gray-300 dark:border-gray-600" />

      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Things I Love
      </h3>
      <ul className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-gray-600 dark:text-gray-400">
        {[
          "Hiking",
          "Traveling",
          "Nature",
          "Photography",
          "Cooking",
          "Sunsets",
          "Beach days",
        ].map((item) => (
          <li
            key={item}
            className="rounded-full bg-gray-100 px-4 py-2 dark:bg-gray-800"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
