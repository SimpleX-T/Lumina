export interface Lesson {
	name: string;
	duration: number;
}

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
	rating: number;
	watched: number;
	lessons: Lesson[];
	resources: Resource;
}
export interface CourseContentProps {
  id: number;
  lessons: LessonProp[];
}
export interface LessonProp {
  id: number;
  name: string;
  content: React.FC;
  duration: string;
  quiz?: QuestionProps[];
}
export interface QuestionProps {
  question: string;
  options: String[];
  answerIndex: number;
  score: number;
}
