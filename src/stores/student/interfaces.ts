export interface LessonInterface {
	day: string;
	title: string;
	link: string;
}

export interface CoursInterface {
	month: string;
	lessons: LessonInterface[];
}

export interface StudentInfoInterface {
	name: string;
	class: string;
	cours: CoursInterface[];
}

export interface UtilInterface {
	title: string;
	link: string;
}

export interface StudentsInfoInterface {
	students: StudentInfoInterface[];
	utils: UtilInterface[];
}
