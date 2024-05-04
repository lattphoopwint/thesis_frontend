class CourseModel {
    id?: number;
    courseCode?: string | undefined;
    title?: string;
    instructor?: string;
    semester?: string

    constructor (id: number, courseCode: string | undefined, title: string, instructor: string, semester: string) {
            this.id = id;
            this.title = title;
            this.courseCode = courseCode;
            this.instructor = instructor;
            this.semester = semester;
    }
}

export default CourseModel;