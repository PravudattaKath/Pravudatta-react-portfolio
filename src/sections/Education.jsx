const education = [
    {
        year:"2015 - 2018",
        institute:"Karanjadia High School",
        course:"10th",
        description:"During my schooling years, I actively balanced academic growth with a passion for extracurricular activities, constantly pushing myself to learn and collaborate with others. This vibrant journey allowed me to build strong foundational skills, form lifelong friendships, and develop a resilient mindset for the future.",
        subjects:["Math","Science","English","Social Studies"],
        current: false,
    },
    {
        year:"2018 - 2020",
        institute:"Wisdom H. Secondary School",
        course:"12th",
        description:"My 12th year was defined by rigorous dedication to my board exams and mastering complex subjects to secure my future. Amidst the endless notes and exam stress, I discovered my true academic passions and laid the groundwork for my career.",
        subjects:["Physics","Chemistry","Math","Biology"],
        current: false,
    },
    {
        year:"2020 - 2023",
        institute:"Vinayak Degree College",
        course:"B.Sc. Computer Science",
        description:"Dedicated Computer Science graduate who spent undergrad mastering software development, data structures, and algorithmic problem-solving. Collaborated on diverse team projects and built practical applications to turn complex theoretical concepts into real-world code.",
        subjects:["c","java","python","sql"],
        current: false,
    },
    {
        year:"2023 - 2025",
        institute:"Trident Academy of Creative Technology",
        course:"Master of Computer Application",
        description:"Driven by a passion for technology, I mastered advanced computing concepts, software development, and modern frameworks during my MCA, turning complex theoretical knowledge into practical coding expertise. Beyond the classroom, I actively collaborated on innovative projects, cracked real-world problem-solving challenges, and built a rock-solid foundation for a thriving career in tech.",
        subjects:["React","Django","python","sql","git","github","postman","Ai"],
        current: false,
    },

];



export const Education = () => {
  return (
    <section id="education" style={{ scrollMarginTop: '80px' }} className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Educational Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Learning empowers{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              our minds.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
           A structured journey of rapid technical growth, evolving from a curious learner into a capable engineer ready to build scalable products and contribute to high-performing teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {edu.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {edu.year}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{edu.institute}</h3>
                    <p className="text-muted-foreground">{edu.course}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {edu.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {edu.subjects.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};