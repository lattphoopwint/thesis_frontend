import { useEffect, useState } from "react";
import CourseModel from "../../../Models/CourseModel";


export const Carousel = () => {

    const [courses, setCourses] = useState<CourseModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            const baseUrl: string = "http://localhost:8080/api/courses";

            const url: string = `${baseUrl}?page=0&size=3`;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseJson = await response.json();

            const responseData = responseJson._embedded.courses;

            const loadedCourses: CourseModel[] = [];

            for (const key in responseData) {
                loadedCourses.push({
                    id: responseData[key].id,
                    title: responseData[key].title,
                    instructor: responseData[key].instructor,
                    semester: responseData[key].semester,
                    courseCode: responseData[key].courseCode
                });
            }

            setCourses(loadedCourses);
            setIsLoading(false);
        };
        fetchCourses().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);

    if (isLoading) {
        return (
            <div className="container m-5">
                <p>Loading...</p>
            </div>
        )
    }

    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        )
    }

    return (
        <div className="container pd-5">
        <div className="row">

                {courses.map((course,index)=>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={require('./../../../Images/BooksImages/default-course.jpg')}
                                className="card-img-top" width='50' height='233' alt="..." />
                            {/* <img src="..." className="card-img-top" alt="..."> */}
                            <div className="card-body">
                                <h5 className="card-title">{course.title}</h5>
                                <p className="card-properties">{course.instructor}</p>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>)}
                
        </div>
        
        </div>
    );

    

    // return (
    //     <div className="container mt-5" style={{ height: 550 }}>
    //         <div className="homepage-carousel-title">
    //             <h3>Find our recommended courses and students' feedbacks here.</h3>
    //         </div>
    //         <div id="carouselExampleControls" className="carousel-dark slide mt-5
    //         d-none d-lg-block" data-bs-interval='false'>

    //             {/*Desktop*/}
    //             {courses.map((course, index) =>
    //                 <div className="carousel-inner">

    //                     <div className="carousel-item active">
    //                         <div className="container d-flex justify-content-center align-items-center">
    //                             <div className=" justify-content-center align-items-center pd-3 mb-3 ">
    //                                 <img
    //                                     src={require('./../../../Images/BooksImages/book-luv2code-1000.png')}
    //                                     width='151'
    //                                     height='233'
    //                                     alt="course"
    //                                 />
    //                                 <div className="container justify-content-center align-items-center">
    //                                     <h6 className="mt-2">{course.title}</h6>
    //                                     <p>{course.instructor}</p>
    //                                     <a className="btn main-color text-white" href="#">Reserve</a>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>

    //                     <div>


    //                         <button className='carousel-control-prev' type='button'
    //                             data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
    //                             <span className='carousel-control-prev-icon' aria-hidden='true'></span>
    //                             <span className='visually-hidden'>Previous</span>
    //                         </button>
    //                         <button className='carousel-control-next' type='button'
    //                             data-bs-target='#carouselExampleControls' data-bs-slide='next'>
    //                             <span className='carousel-control-next-icon' aria-hidden='true'></span>
    //                             <span className='visually-hidden'>Next</span>
    //                         </button>
    //                     </div>
                
    //                 </div>
    //                 )}
                

    //         </div>

    //         {/* Mobile */}
    //         <div className='d-lg-none mt-3'>
    //             <div className='row d-flex justify-content-center align-items-center'>
    //                 <div className="text-center">
    //                     <img src={require('./../../../Images/BooksImages/book-luv2code-1000.png')}
    //                         width='151'
    //                         height='233'
    //                         alt="course"
    //                     />
    //                     <h6 className="mt-2">
    //                         <b>Course</b>
    //                     </h6>
    //                     <p>Luv2Code</p>
    //                     <a className='btn main-color text-white' href="#">Reserve</a>

    //                 </div>
    //             </div>
    //         </div>
    //         <div className='homepage-carousel-title mt-3'>
    //             <a className="btn btn-outline-secondary btn-lg" href="#">View More</a>
    //             {/* <Link className='btn btn-outline-secondary btn-lg' to='/search'>View More</Link> */}
    //         </div>
    //     </div>
    // );
}



export default Carousel;

