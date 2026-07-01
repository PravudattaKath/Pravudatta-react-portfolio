import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "An exceptionally curious and disciplined student who always demonstrated a sharp analytical mind. Their strong foundational grasp of mathematics and logical thinking during high school made it clear early on that they were destined for a bright future in technology.",
    author: "Dayanidhi Sahoo",
    role: "Head Teacher ,Karanjadia High School",
    avatar:
      "https://images.unsplash.com/photo-1659353222656-0af4488e011d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFpJTIwZ2VuZXJldGVkJTIwbWFsZSUyMHRlYWNoZXIlMjBhdmF0YXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    quote:
    "A dedicated and hardworking individual who consistently stood out for their problem-solving abilities. They showed an incredible aptitude for computer science and practical learning, always eager to go beyond the textbook syllabus to understand how things work",
    author: "Nandalal Ghadai",
    role: "Chairman, Wisdom H.Secondary School",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "During their undergraduate studies, they proved to be a highly competent and proactive programmer. They possessed a rare combination of technical talent and academic excellence, frequently leading team projects and showcasing brilliant coding and algorithmic skills",
    author: "Bulu Rout",
    role: "Principal, Vinayak Degree College",
    avatar:
      "https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGFpJTIwZ2VuZXJldGVkJTIwbWFsZSUyMHRlYWNoZXIlMjBhdmF0YXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    quote:
      "An outstanding postgraduate scholar who has truly mastered advanced computing concepts and modern frameworks. As an MCA student, they demonstrated excellent leadership qualities, successfully engineered complex software systems, and proved they are fully ready to innovate in the tech industry.",
    author: "Kaustav Dev",
    role: "HOD, TACT",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" style={{ scrollMarginTop: '80px' }} className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};