import { Navbar } from "@/layout/Navbar.jsx";
import { Hero } from "@/sections/Hero.jsx";
import { About } from "@/sections/About.jsx";
import { Project } from "@/sections/Project.jsx";
import { Education } from "@/sections/Education.jsx";
import { Testimonials } from "@/sections/Testimonials.jsx";
import { Contact } from "@/sections/Contact.jsx";
import { Footer } from "@/layout/Footer.jsx";



function App() {
    return <div className="min-h-screen overflow-x-hidden">   
        <Navbar />
        <main>
            <Hero />
            <About />
            <Project />
            <Education />
            <Testimonials />
            <Contact />
        </main>
        <Footer />
    </div>
}

export default App;