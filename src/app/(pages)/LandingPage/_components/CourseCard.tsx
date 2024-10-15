import styles from "./CourseCard.module.css";

interface CourseCardProps {
	title: string;
	description: string;
	imageUrl: string;
	className?: string;
	courseUrl: string;
}
function CourseCard({
	title,
	description,
	imageUrl,
	className = "",
	courseUrl,
}: CourseCardProps) {
	return (
		<div className={`${styles.courseCard} ${className}`}>
			<div className={styles.courseImage}></div>
			<h3>{title}</h3>
			<p className={styles.courseDescription}>{description}</p>
			<a
				href={courseUrl}
				className={styles.courseLink}>
				Start Learning
			</a>
		</div>
	);
}

export default CourseCard;
