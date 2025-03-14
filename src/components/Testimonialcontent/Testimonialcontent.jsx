import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        text: "This platform has transformed my child's learning experience! The interactive lessons make studying fun.",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        rating: 5,
    },
    {
        id: 2,
        name: "Rahul Mehta",
        text: "I love how personalized and engaging the learning modules are. My son enjoys every session!",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 4,
    },
    {
        id: 3,
        name: "Anita Verma",
        text: "Great platform! My daughter has improved her grades significantly.",
        image: "https://randomuser.me/api/portraits/women/55.jpg",
        rating: 5,
    },
    {
        id: 4,
        name: "Vikram Singh",
        text: "Highly recommended! The support and quality of content are top-notch.",
        image: "https://randomuser.me/api/portraits/men/50.jpg",
        rating: 4,
    },
];

const TestimonialSection = () => {
    return (
        <section className=" py-20 px-6">
            <div className="max-w-3xl mx-auto mb-20 px-4 text-center ">
                <h2 className="text-3xl font-bold text-gray-900">What Parents Say</h2>
                <p className="text-gray-600 mt-2">
                    Real experiences from parents using our platform
                </p>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-6">
                {testimonials.map((testimonial) => (
                    <Card
                        key={testimonial.id}
                        className="p-6 rounded-xl shadow-lg text-white max-w-md w-full backdrop-blur-md border bg-gray-100 hover:scale-105 transition-transform duration-300"
                    >
                        <CardContent className="flex flex-col items-center text-center">
                            <Avatar className="w-20 h-20 mb-4 border-2 border-white">
                                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <p className="italic text-black">"{testimonial.text}"</p>
                            <div className="flex mt-4 text-yellow-400">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="font-semibold mt-2 text-gray-900">- {testimonial.name}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default TestimonialSection;
