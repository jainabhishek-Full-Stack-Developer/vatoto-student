import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { generateSlug } from "../../utils/index";

const courses = [
  {
    title: "Accounts Made Easy",
    description: "Master frontend & backend with React, Node.js, and databases.",
    image: "/images/course-1.jpg",
  },
  {
    title: "Geeta Courses",
    description: "Learn Figma, design principles, and user experience strategies.",
    image: "/images/course-2.jpg",
  },
  {
    title: "Hanuman Chalisa",
    description: "Grow businesses with social media, SEO, and online advertising.",
    image: "/images/course-3.jpg",
  },
];

const PopularCourses = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">Popular Courses</h2>
        <p className="text-lg text-gray-600 mt-3">
          Enhance your skills with our most in-demand courses
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-12">
        {courses.map((course, index) => (
          <Link href={`/course/${generateSlug(course.title)}`} key={index}>
            <Card className="rounded shadow-lg p-0 m-0 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white">
              <CardContent className="m-0 p-0">
                <div className="w-full ">
                  <img src={course.image} alt={course.title} className="rounded w-100  h-[245px]" />
                </div>
                <h4 className="text-xl p-5 font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  {course.title}
                </h4>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
