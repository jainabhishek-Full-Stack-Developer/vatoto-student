import Homewrapper from '../Homewrapper/Homewrapper';
import Courseherosection from './Courseherosection';
import Pricecontent from '../Pricecontent/Pricecontent';
import TestimonialSection from '../Testimonialcontent/Testimonialcontent';
import Joinnowcontent from '../Joinnowcontent/Joinnowcontent';
import FaqContent from '../Faqcontent/Faqcontent';
import Coursesingledetails from './Coursesingledetails';

const Coursealldetails = () => {
  return (
    <Homewrapper>
      <Courseherosection />
      <Coursesingledetails />
      <Pricecontent />
      <Joinnowcontent />
      <TestimonialSection />
      <FaqContent />

    </Homewrapper>
  )
}

export default Coursealldetails;
