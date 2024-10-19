const CourseLayout = ({
  img,
  text,
  italic,
  color,
}: {
  img: string;
  text: string;
  italic: string;
  color: string;
}) => {
  return (
    <span className="text-2xl  px-8 leading-loose flex flex-row-reverse justify-center items-center">
      <span>
        {text}
        <i
          className={`font-extralight ${color === "yellow" ? "text-[#fdc10d]" : "text-[#507eeb]"}`}
        >
          {italic}
        </i>
      </span>

      <img src={img} className="w-2/5" />
    </span>
  );
};
