interface GridCardProps {
  title: string;
  titleClassName: string;
  containerClassName: string;
  type: 'array' | 'text' | 'info';
  data: string | string[] | number;
}

const GridCard = ({
  title,
  titleClassName,
  containerClassName,
  type,
  data,
}: GridCardProps) => {
  return (
    <div className={`relative p-4 ${containerClassName}`}>
      <div className="absolute inset-0 bg-mauve-3/40 dark:bg-mauve-dark-3/40 backdrop-blur-sm -z-10 rounded-sm" />
      <div className="relative z-10">
        <p
          className={`${titleClassName} text-mauve-11 dark:text-mauve-dark-11 font-montserrat font-bold uppercase`}
        >
          {title}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {type === 'array' &&
            Array.isArray(data) &&
            data.map((item, index) => <ArraySubCard key={index} text={item} />)}
          {type === 'text' && typeof data === 'string' && (
            <TextSubCard text={data} />
          )}
          {type === 'info' &&
            (typeof data === 'string' || typeof data === 'number') && (
              <TextInfo text={data} />
            )}
        </div>
      </div>
    </div>
  );
};

const ArraySubCard = ({ text }: { text: string }) => {
  return (
    <span className="bg-purple-alpha-3 dark:bg-purple-dark-alpha-3 text-purple-12 dark:text-purple-dark-12 p-1.5 uppercase font-montserrat font-semibold text-xs">
      {text}
    </span>
  );
};

const TextSubCard = ({ text }: { text: string }) => {
  return <p className="font-montserrat font-normal text-base">{text}</p>;
};

const TextInfo = ({ text }: { text: string | number }) => {
  return <p className="font-montserrat font-bold text-sm">{text}</p>;
};

export { GridCard, ArraySubCard, TextSubCard, TextInfo };
