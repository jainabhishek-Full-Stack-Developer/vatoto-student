import Faqcontent from "../Faqcontent/Faqcontent";
import Herocontent from "../Herocontent/Herocontent";
import Homewrapper from "../Homewrapper/Homewrapper";
import Joinnowcontent from "../Joinnowcontent/Joinnowcontent";
import PopularCourses from "../PopularCourses/PopularCourses";
import Pricecontent from "../Pricecontent/Pricecontent";
import Testimonialcontent from "../Testimonialcontent/Testimonialcontent";
import Whychooseus from "../Whychooseus/Whychooseus";

const Homecontent = () => {
    return (
        <Homewrapper>
            <Herocontent />
            <PopularCourses/>
            <Whychooseus />
            <Pricecontent />
            <Joinnowcontent/>
            <Testimonialcontent />
            <Faqcontent />
        </Homewrapper>
    )
}

export default Homecontent
