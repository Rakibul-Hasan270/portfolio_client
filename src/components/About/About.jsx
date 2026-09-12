import Lottie from "lottie-react";
import img from '../../assets/animation.json';

const About = () => {
    return (
        <div className="flex md:flex-row flex-col-reverse sm:items-start md:items-center md:gap-10 md:mt-32">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                <Lottie className="w-full" animationData={img}>
                </Lottie>
            </div>
            <div className='flex-grow'>
                <h3 className='text-center md:text-start text-2xl md:text-4xl font-extrabold mb-8'>About Me <span className="text-pink-800 font-extrabold">_</span></h3>
                <p className="text-center md:text-start">I'm Rakibul Hasan, a Junior Web Developer. I have completed a diploma in Computer Engineering from Kurigram Polytechnic Institute. I specialize in building responsive web applications with <span className="font-bold">ReactJS, JavaScript, Tailwind CSS, HTML, and CSS,</span> and have experience with backend technologies like <span className="font-bold">Node.js, Express.js, MongoDB, JWT, and Firebase</span>.
                    <br /> <br />
                    I am passionate about coding and constantly exploring new technologies to enhance my skills.
                    I enjoy taking on challenging projects that push me to think creatively and solve problems efficiently.
                    My goal is to grow continuously as a full-stack developer, delivering high-quality and responsive web applications.</p>
            </div>
        </div>
    );
};

export default About;