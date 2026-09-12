import { motion } from "framer-motion";

const SkillsNxt = () => {
    const skills = [
        { src: "https://i.ibb.co.com/GfH2cc7s/download-1-removebg-preview.png", alt: "React" },
        { src: "https://i.ibb.co.com/6JT6JpqC/download.png", alt: "js" },
        { src: "https://i.ibb.co.com/N67zHmXS/download-2-removebg-preview.png", alt: "node" },
        { src: "https://i.ibb.co.com/fdMjGt77/download-3-removebg-preview.png", alt: "express" },
        { src: "https://i.ibb.co.com/MWHjffs/download-4-removebg-preview.png", alt: "mongoDB" },
        { src: "https://i.postimg.cc/C5JL432w/Tailwind.png", alt: "Tailwind CSS" },
        { src: "https://i.ibb.co.com/JFW5KnkN/download-6-removebg-preview.png", alt: "HTML5" },
        { src: "https://i.ibb.co.com/XQskyNQ/download-6-removebg-preview-1.png", alt: "CSS3" },
        { src: "https://i.ibb.co.com/6c0NKJrf/download-7-removebg-preview.png", alt: "Firebase" },
        { src: "https://i.ibb.co.com/mC3t0Xqk/download-5-removebg-preview.png", alt: "MI" },
        { src: "https://i.postimg.cc/DyM7yPkp/github.png", alt: "GitHub" },
        { src: "https://i.ibb.co.com/5WjK37kf/images-removebg-preview.png", alt: "Figma" },
    ];

    return (
        <div className="my-20 md:my-32">
            <h3 className="text-center text-2xl md:text-4xl font-extrabold mb-16">
                Skills & Tools
                <span className="text-pink-800 font-extrabold">_</span>
            </h3>

            {/* Grid Layout: 2 rows x 6 columns */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 place-items-center max-w-[500px] mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="border-2 border-pink-800 rounded-lg p-2"
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            duration: 2 + Math.random(),
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                            delay: Math.random(),
                        }}
                    >
                        <div className="h-12 w-12 flex items-center justify-center"><img className="h-10 w-10 hover:rotate-12 transition" src={skill.src} alt={skill.alt} /></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkillsNxt;