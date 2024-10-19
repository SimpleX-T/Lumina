const CourseHeader = ({
  img,
  header,
  text,
}: {
  img: string;
  header: string;
  text: string;
}) => {
  return (
    <div className="relative">
      <div
        className="bg-center h-[10ch]"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <h1>{header}</h1>
      {text}
    </div>
  );
};
export default CourseHeader;
