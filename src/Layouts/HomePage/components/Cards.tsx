
import CourseModel from "../../../Models/CourseModel";

export const Cards:React.FC<{
    courses: CourseModel;
}> = (props) => {


    return (
        <div className="container pd-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
            
                    <div className="col">
                        <div className="card">
                            <img src={require('./../../../Images/BooksImages/default-course.jpg')}
                                className="card-img-top" width='50' height='233' alt="..." />
                            {/* <img src="..." className="card-img-top" alt="..."> */}
                            <div className="card-body">
                                <h5 className="card-title">{props.courses.title}</h5>
                                <p className="card-properties">{props.courses.semester}</p>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                
        </div>
        
        </div>
    );
}
export default Cards;