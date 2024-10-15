import CourseDetails from "../_components/CourseDetails";

const Courses = () => {
  const courseData = {
    title: "GETTING STARTED WITH CRYPTOCURRENCIES",
    description:
      "Understand how digital money works by diving inot the world of cryptocurrencies.\n Understand how they are built, and maintained and learn what affects their maerket prices",
    image: "/Images/misc.jpg",
    duration: "30M",
    rating: 4.5,
    watched: 140,
    lessons: [
      { name: "What are Cryptocurrencies", duration: "5M" },
      { name: "Popular cryptocurrencies", duration: "5M" },
      { name: "How are cryptocurrencies made", duration: "10M" },
      { name: "Price Variation of cryptocurrencies", duration: "10M" },
    ],
    instructor: {
      name: "LED ZEPPLIN",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: "/api/placeholder/128/128",
    },
    resources: {
      audio: true,
      video: true,
      text: true,
      visuals: true,
    },
  };

  return <CourseDetails {...courseData} />;
};

export default Courses;
