import Banner from "./components/Banner";
import ExploreRecommendCourses from "../../ExploreRecommendCourses";
import Carousel from "./components/Carousel";
import SignUp, { Info } from "./components/Info";

export const HomePage = () => {
    return (
        <>
            <Banner/>
            {/* <RegisterForm/> */}
            <ExploreRecommendCourses/>
            <Carousel/>
            {/* <Cards/> */}
            <Info/>
        </>
    );
}

export default HomePage