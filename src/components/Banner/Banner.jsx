import { LuArrowDownToLine } from "react-icons/lu";
import img from '../../assets/1000027735.jpg';
import { ToastContainer, toast } from 'react-toastify';
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
    const notify = () => toast("The resume has been downloaded.");
    return (
        <div className="md:flex justify-between items-center mt-10 gap-4 space-y-10 md:space-y-16">
            <div className="flex-grow space-y-5">
                <h3 className="text-3xl md:text-5xl font-bold text-center md:text-start">I'm Rakibul Hasan</h3>

                <div className="flex justify-center md:justify-start items-center"><span className="text-2xl mr-3 hidden md:block">a</span>
                    <div className="text-xs md:text-xl">
                        <TypeAnimation className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold"
                            sequence={[
                                'MERN Stack Developer',
                                1000,
                                'React Developer',
                                1000,
                                'Frontend Developer',
                                1000,
                            ]}
                            speed={50}
                            style={{ fontSize: '2em' }}
                            repeat={Infinity}
                        />
                    </div>
                </div>

                <p className="md:w-[700px] text-center md:text-start">Enthusiastic Jr. Web Developer skilled in creating dynamic, complex, and interactive web applications with innovative technologies.</p>
                <div className="md:w-max">
                    <a href="/MERN_Stack_Developer_resume_of_Rakibul_Hasan.pdf" download={true}>
                        <button onClick={notify} className="mx-auto  md:ml-0 flex items-center gap-2 bg-gradient-to-r from-indigo-800 to-pink-800 hover:from-pink-800 hover:to-indigo-800 text-white px-4 py-2 rounded-lg">Resume <LuArrowDownToLine /></button>
                    </a>
                </div>
            </div>
            <div className="mx-auto rounded-full w-7/12 md:w-4/12 border-4 border-pink-800">
                <img className="rounded-full" src={img} alt="" />
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Banner;