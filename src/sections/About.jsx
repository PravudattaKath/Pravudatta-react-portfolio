import { Code2, Rocket, User, Lightbulb } from "lucide-react"
const highlights = [
    {
    icon : Code2,
    title: "clean code",
    description: "Writing maintainging, scalable code that stands the test of time."
    },
    {
    icon : Rocket,
    title: "Performance",
    description: "Optimizing for speed and delivering a smooth user experience."

    },
    {
    icon : User,
    title: "Collaboration",
    description: "Working closely with a team of professionals to bring your ideas to life."
    },
    {
    icon : Lightbulb,
    title: "Innovation",
    description: "Staying up to date with the latest industry trends and technologies."
    }

]

export const About = () => {
    return( 
    <section id="about" style={{ scrollMarginTop: '80px' }} className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                    <div className='space-y-8'>
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>
                    <h2 className="text-4xl font-bold animate-fade-in md:text-5xl leading-tight animation-delay-200 text-secondary-foreground">Building the future,
                        <span className="font-serif italic font-normal text-white"> {" "}one line of code at a time.</span>
                    </h2>
                    <div className="space-y-4 animate-fade-in animation-delay-400 text-muted-foreground">
                        <p>
                            Hello! I'm Pravudatta Kath, an MCA graduate from Trident Academy of Creative Technology,
                            Bhubaneswar. I am passionate about web development and enjoy creating modern, 
                            responsive, and user-friendly applications. My strong interest in technology motivates 
                            me to continuously learn new tools and frameworks that help me build efficient digital 
                            solutions.
                        </p>
                        <p>
                            I have hands-on experience with HTML5, CSS3, JavaScript, React.js, Python, Django, 
                            and Node.js. I am also proficient in working with databases such as PostgreSQL, MongoDB,
                            Oracle, and MySQL. In addition, I use Git and GitHub for version control and Postman for
                            API testing. Throughout my academic journey, I have developed multiple projects 
                            that strengthened my technical, analytical, and problem-solving skills.
                        </p>
                        <p>
                            Beyond academics, I have participated in hackathons, completed industrial training in Python,
                            and earned NPTEL certifications in IoT and Intellectual Property Rights & Competition Law.
                            I am eager to begin my professional career, contribute to innovative projects, and grow as
                            a Full-Stack Developer while delivering impactful solutions that create real value for 
                            users and organizations.
                        </p>
                    </div>
                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            My mission is to develop innovative and user-focused web applications that solve real-world problems.
                            I strive to continuously enhance my technical skills and stay updated with emerging technologies.
                            My goal is to create impactful digital solutions while growing into a successful Full-Stack Developer.
                        </p>
                    </div>
                </div>
                {/* Right Column */}
                <div className="grid sm:grid-cols-2 gap-2">
                    {highlights.map((item, inx) => (
                        <div key={inx} className="glass p-6 rounded-2xl animated-fade-in"
                        style={{animationDelay: `${(inx + 1)*100}ms`}}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
}