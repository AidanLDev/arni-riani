interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return (
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
      {text}
    </h1>
  );
}

export default Title;
