import { ArrowRight, Download,ChevronDown, GitBranch, Share2, Globe } from "lucide-react"
import { Button } from "../components/Botten"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"

const skills = [
    "HTML",
    "CSS", 
    "JavaScript",  
    "React", 
    "Next.js", 
    "TailwindCSS", 
    "Node.js", 
    "Python",
    "Django",
    "PostgreSQL",
    "Oracle",
    "Express.js", 
    "MongoDB", 
    "Git", 
    "GitHub",
    "ChatGPT",
    "OpenAI", 
    
];

export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg */}
        <div className="absolute inset-0">
            <img src="/public/hero-bg.jpg" 
            alt="hero-bg"
            className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </div>

        {/*Green doots*/}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60 "
                    style={{
                        backgroundColor: "#20b2a6",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out  infinite `,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 items-center gap-12">
                {/* Left column- Text content */}

                <div className="space-y-8">
                    <div className=" animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animane-pulse" />
                                Frontend Developer + React Developer 
                        </span>
                    </div>
                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-100">
                            Crafting <span className="text-primary glow-text">Digital</span>
                            <br />
                            Experiences that
                            <br />
                            <span className="font-serif italic font-normal text-white">precision
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200">
                            Hi , I'm Pravudatta kath - a Developer specializing in React, Python,
                             Django, PostgreSql and Api's.I build scalable, performant web application
                              that users love.
                        </p>   
                    </div>
                    {/* CTA */}
                    <div className="flex flex-wrap items-center gap-2 animate-fade-in animate-delay-300">
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById("contact");
                                el?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5" />
                            </Button>
                        </a>
                        <a href="public\Pravudatta-software-heizen.pdf" download target="_blank" rel="noopener noreferrer">
                            <AnimatedBorderButton>
                                <Download className="w-5 h-5" />
                                Download CV
                            </AnimatedBorderButton>
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-muted-foreground text-sm">Follow Me:</span>
                        {[
                            { icon: GitBranch, href: "#" },
                            { icon: Share2, href: "#" },
                            { icon: Globe, href: "#" },
                        ].map((social, idk) => {
                            const Icon = social.icon;
                            return (
                                <a key={idk} href={social.href} 
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                    <Icon className="w-5 h-5" />
                                </a>
                            )
                        })}

                    </div>
                </div>
                {/* Right column- Image */}
                <div className=" relaticeanimate-fade-in animate-delay-300">
                        {/* Image */}
                        <div className="relative max-w-md max-auto">
                            <div  className="absolute inset-0 rounded-3xl bg-gradient-to-br 
                            from-primary/30 via-transparent to-primary/10 blur-2xl
                             animated-pluse"/>
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src='/public/my-image.png'
                                 alt="Pravudatta kath" 
                                 className=" w-full aspect-[4/5] object-cover rounded-2xl" />
                                 {/* Floating badge*/}
                                <div className="absolute -botton-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animated-pulse" />
                                        <span className=" text-sm font-medium">Available For Work</span>
                                    </div>
                                </div>

                                 {/*Stats badge*/}
                                 <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animated-delay-500">
                                    <div className="text-sm font-medium text-primary">Fresher</div>
                                 </div>
                            </div>
                        </div>
                </div>
            </div>
            {/* Skills */}
            <div className=" mt-20 animate-fade-in animate-delay-500">
                <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I've worked with</p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                         {[...skills, ...skills].map((skill, idk) => (
                            <div key={idk} className="flex-shrink-0 px-8 py-4">
                                 <span className="text-muted-foreground/50 text-xl font-semibold hover:text-muted-foreground transition-colors">{skill}</span>
                            </div>
                         ))}
                    </div>
                </div>
            </div>
        </div>
        <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
}