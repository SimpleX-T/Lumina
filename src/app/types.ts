export interface Instructor {
  name: string;
  bio: string;
  image: string;
}
export interface Resource {
  audio?: boolean;
  video?: boolean;
  text?: boolean;
  visuals?: boolean;
}

export interface CourseProps {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: number;
  lessons: Lesson[];
  resources: Resource;
}
export interface Lesson {
  id: number;
  title: string;
  duration: number;
  content: React.FC;
  quiz?: QuestionProps[];
}
export interface QuestionProps {
  question: string;
  options: String[];
  answerIndex: number;
  score: number;
}
