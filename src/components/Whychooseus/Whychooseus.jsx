import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 mt-3">
          Empower your learning journey with top-tier education and
          industry-recognized certifications.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto mt-12 px-6">
        {/* Feature 1 */}
        <Card className="p-6 shadow-lg m-5 bg-white rounded-2xl transition-all duration-300 hover:shadow-xl">
          <CardContent className="flex flex-col items-center text-center gap-4">
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <img
                src="/images/why-1.jpg"
                alt="Industry-Leading Courses"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900">
                Industry-Leading Courses
              </h4>
              <p className="text-gray-600 text-base mt-2">
                Expert-curated content designed by top educators and professionals,
                covering in-demand fields such as technology, business, design, marketing, and more.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Feature 2 */}
        <Card className="p-6 shadow-lg m-5 bg-white rounded-2xl transition-all duration-300 hover:shadow-xl">
          <CardContent className="flex flex-col items-center text-center gap-4">
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <img
                src="/images/why-2.jpg"
                alt="Interactive & Engaging Learning"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900">
                Interactive & Engaging Learning
              </h4>
              <p className="text-gray-600 text-base mt-2">
                Includes hands-on projects, quizzes, and real-world case studies, along with
                live Q&A sessions and interactive discussions for enhanced learning.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Feature 3 */}
        <Card className="p-6 shadow-lg m-5 bg-white rounded-2xl transition-all duration-300 hover:shadow-xl">
          <CardContent className="flex flex-col items-center text-center gap-4">
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <img
                src="/images/why-3.jpg"
                alt="Learn at Your Own Pace"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900">
                Learn at Your Own Pace
              </h4>
              <p className="text-gray-600 text-base mt-2">
                Flexible schedules that fit your lifestyle, plus lifetime access to course materials
                so you can revisit content anytime.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Feature 4 */}
        <Card className="p-6 shadow-lg m-5 bg-white rounded-2xl transition-all duration-300 hover:shadow-xl">
          <CardContent className="flex flex-col items-center text-center gap-4">
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <img
                src="/images/why-4.jpg"
                alt="Flexible Learning Options"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900">
                Flexible Learning Options
              </h4>
              <p className="text-gray-600 text-base mt-2">
                Choose when and how you learn, with a variety of course formats, including
                self-paced and instructor-led options.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyChooseUs;
