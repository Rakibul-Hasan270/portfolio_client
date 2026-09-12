import { LuGithub } from "react-icons/lu";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router";


const ProjectShowcase = () => {
    return (
        <div className="md:mt-10">
            <h3 className='text-center text-2xl md:text-4xl font-extrabold mb-16'>Projects Showcase<span className="text-pink-800 font-extrabold">_</span></h3>

            <div className="md:flex gap-5 mb-5">
                {/* card-1  */}
                <div className="p-5 border border-pink-800 hover:border hover:border-white group flex-1">
                    <div
                        className="h-[250px]  relative transition-all duration-[1500ms] ease-in-out  w-full bg-cover flex justify-end gap-4 bg-top group-hover:bg-bottom"
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/D2RFxTn/zestora-restaurant-client-10-14-2025-04-04-AM.png')`,
                        }}
                    ></div>
                    <div>
                        <h2 className="border-b pb-3 mb-4  mt-3"><span className="text-xl font-semibold">Zestora Restaurant</span> - For Food</h2>
                        <div className="flex justify-center flex-wrap gap-2 border-b pb-3">
                            <p className="border text-white font-light border-pink-800 rounded-full px-3">React.js</p>
                            <p className="border text-white font-light border-pink-800 rounded-full px-3">Node JS</p>
                            <p className="border text-white font-light border-pink-800 rounded-full px-3">Express JS</p>
                            <p className="border text-white font-light border-pink-800 rounded-full px-3">MongoDB</p>
                            <p className="border text-white font-light border-pink-800 rounded-full px-3">Tailwind Css</p>
                            <p className="border text-white font-light border-pink-800 rounded-full px-3">Tanstack Query</p>
                            <p className="border text-white font-light border-pink-800 rounded-full px-3">React Hook Form</p>
                            <p className="border text-white font-light border-pink-800 rounded-full px-3">Jwt Token</p>
                        </div>

                        <div className="flex gap-3 mt-4">
                            <Link to={'https://github.com/Rakibul-Hasan270/zestora-restaurant-client'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Client <LuGithub /></button>
                            </Link>

                            <Link to={'https://github.com/Rakibul-Hasan270/zestora-restaurant-server'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Server <LuGithub /></button>
                            </Link>
                        </div>
                        <div className="mt-4">
                            <Link to={'https://zestora-restaurant-new.web.app'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Live View  <FaArrowUpRightFromSquare /></button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* card-2  */}
                <div className="p-5 border border-pink-800 hover:border hover:border-white group flex-1">
                    <div
                        className="h-[250px]  relative transition-all duration-[1500ms] ease-in-out  w-full bg-cover flex justify-end gap-4 bg-top group-hover:bg-bottom"
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/WNkKs4dd/Fund-Flowrout-10-14-2025-04-07-AM.png')`,
                        }}
                    ></div>
                    <div>
                        <h2 className="border-b pb-3 mb-4  mt-3"><span className="text-xl font-semibold">Fund Flow</span> - Donate to help people</h2>
                        <div className="flex justify-center flex-wrap gap-2 border-b pb-3">
                            <p className="border text-white font-light border-pink-800 rounded-full px-3">React.js</p>
                            <p className="border text-white font-light border-pink-800 rounded-full px-3">Node JS</p>
                            <p className="border text-white font-light border-pink-800 rounded-full px-3">Express JS</p>
                            <p className="border text-white font-light border-pink-800 rounded-full px-3">MongoDB</p>
                            <p className="border text-white font-light border-pink-800 rounded-full px-3">Tailwind Css</p>
                            <p className="border text-white font-light border-pink-800 rounded-full px-3">Tanstack Query</p>
                            <p className="border text-white font-light border-pink-800 rounded-full px-3">Stripe JS</p>
                            <p className="border text-white font-light border-pink-800 rounded-full px-3">Firebase</p>
                            <p className="border text-white font-light border-pink-800 rounded-full px-3">Lottie React</p>
                            <p className="border text-white font-light border-pink-800 rounded-full px-3">Jwt Token</p>
                        </div>

                        <div className="flex gap-3 mt-4">
                            <Link to={'https://github.com/Rakibul-Hasan270/FundFlow_PDL_client'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Client <LuGithub /></button>
                            </Link>

                            <Link to={'https://github.com/Rakibul-Hasan270/FundFlow_PDL_server'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Server <LuGithub /></button>
                            </Link>
                        </div>
                        <div className="mt-4">
                            <Link to={'https://public-donation-list.web.app'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Live View  <FaArrowUpRightFromSquare /></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="md:flex gap-5">
                <div className="p-5 border border-pink-800 hover:border hover:border-white group flex-1">
                    <div
                        className="h-[250px]  relative transition-all duration-[1500ms] ease-in-out  w-full bg-cover flex justify-end gap-4 bg-top group-hover:bg-bottom"
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/KDH2M2Y/Alphabet-Clash-Pro-01-25-2025-09-53-AM.png')`,
                        }}
                    ></div>
                    <div>
                        <h2 className="border-b pb-3 mb-4  mt-3"><span className="text-xl font-semibold">Alphabet Clash Pro</span> - TypeMaster</h2>
                        <div className="flex flex-wrap gap-2 border-b pb-3">
                            <p className="border text-white border-pink-800 rounded-full px-3">JavaScript</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">Tailwind Css</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">HTML5</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">DaisyUi</p>
                        </div>

                        <div className="flex gap-3 mt-4">
                            <Link to={'https://github.com/Rakibul-Hasan270/alpha-clash'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Github <LuGithub /></button>
                            </Link>

                            <Link to={'https://loquacious-pegasus-97324b.netlify.app/'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Live View  <FaArrowUpRightFromSquare /></button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="p-5 border border-pink-800 hover:border hover:border-white group flex-1">
                    <div
                        className="h-[250px]  relative transition-all duration-[1500ms] ease-in-out  w-full bg-cover flex justify-end gap-4 bg-top group-hover:bg-bottom"
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/KrVL6Bt/Retro-Forum-01-25-2025-10-21-AM.png')`,
                        }}
                    ></div>
                    <div>
                        <h2 className="border-b pb-3 mb-4 mt-3"><span className="text-xl font-semibold">Retro Forum</span> - RetroTalk</h2>
                        <div className="flex flex-wrap gap-2 border-b pb-3">
                            <p className="border text-white border-pink-800 rounded-full px-3">JavaScript</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">Tailwind Css</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">HTML5</p>
                            <p className="border text-white border-pink-800 rounded-full px-3">DaisyUI</p>
                        </div>

                        <div className="flex gap-3 mt-4">
                            <Link to={'https://github.com/Rakibul-Hasan270/retro_forum'} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Github <LuGithub /></button>
                            </Link>

                            <Link to={'https://rakibul-hasan270.github.io/retro_forum/  '} className="w-full bg-gray-600 border hover:border-pink-800 hover:bg-gray-800 flex justify-center">
                                <button className="text-white  py-2 flex justify-center items-center gap-2">Live View  <FaArrowUpRightFromSquare /></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default ProjectShowcase;