export const AuthorityQuote = ({
  lead,
  leadEmp,
  close,
  closeEmp,
  empColor = "rust",
  leadColor = "blue",
  bgColor = "white",
  pady = "py-10 lg:py-14",
  padx = "",
  breakLine = "sm",
}: any) => {
  const lineBreaks: { [key: string]: string } = {
    xts: "xts:block",
    xs: "xs:block",
    sm: "sm:block",
    md: "md:block",
    lg: "lg:block",
  };
  const breakClass = lineBreaks[breakLine] || "sm:block";
  return (
    <div className={`w-full bg-${bgColor}`}>
      <div
        className={`mx-auto container text-center text-${leadColor} ${pady} ${padx}`}
      >
        <h2 className="authority-quote">
          &quot;{lead}&nbsp;
          <span className={`text-${empColor} font-bold`}>{leadEmp}</span>
          ,&nbsp;
          <br className={`hidden ${breakClass}`} />
          {close}&nbsp;
          <span className={`text-${empColor} font-bold`}>{closeEmp}</span>
          .&quot;
        </h2>
      </div>
    </div>
  );
};

export const SectionHeadline = ({
  children,
  classname = "section-headline",
}: any) => (
  <div className="mb-10 lg:mb-20 flex justify-center">
    <h2 className={classname}>{children}</h2>
  </div>
);

export const YinYang = ({ data, connector = "and" }: any) => (
  <ul className="flex flex-col gap-6 font-serif text-xl md:text-2xl lg:text-4xl italic">
    {data.map((item: any, idx: any) => (
      <li key={idx} className="flex flex-col gap-2">
        <div className="flex justify-between items-baseline">
          <span>{item.yin}</span>
          <span className="text-rust font-sans font-bold not-italic text-base md:text-lg lg:text-2xl uppercase">
            {connector}&nbsp;{item.yang}
          </span>
        </div>
        <div className="h-[1px] w-full bg-gradient-to-r from-blue/60 via-blue/20 to-rust/80" />
      </li>
    ))}
  </ul>
);
