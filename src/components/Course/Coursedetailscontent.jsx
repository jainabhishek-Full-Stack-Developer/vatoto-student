import FaqContent from "../Faqcontent/Faqcontent";
import Homewrapper from "../Homewrapper/Homewrapper";
import Joinnowcontent from "../Joinnowcontent/Joinnowcontent";
import Pricecontent from "../Pricecontent/Pricecontent";
import TestimonialSection from "../Testimonialcontent/Testimonialcontent";
import Courseherosection from "./Courseherosection";
import Courseprogram from "./Courseprogram";

const Coursedetailscontent = () => {
    return (
        <Homewrapper>
            <Courseherosection />
            <Courseprogram />
            <Pricecontent />
            <Joinnowcontent />
            <TestimonialSection />          
            <FaqContent />
        </Homewrapper>
    )
}

export default Coursedetailscontent;
