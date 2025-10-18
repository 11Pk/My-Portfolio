import { useEffect, useState } from "react";   
import { motion, AnimatePresence } from "motion/react";

function Skills(){
    console.log("Skills Rendered");
    const Skillset = [
  { name: 'Python', logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",key:'Python', color: 'from-yellow-400 to-orange-500'},
  { name: 'C/C++', logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",key:'C/C++', color: 'from-blue-500 to-purple-600' },
  { name: 'JavaScript', logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",key:'JavaScript', color: 'from-yellow-300 to-yellow-500' },
  { name: 'HTML', logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",key:'HTML', color: 'from-orange-500 to-red-500' },
  { name: 'CSS', logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",key:'CSS', color: 'from-blue-400 to-blue-600' },
  { name: 'Data Structures & Algorithms', logo: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",key:'Data Structures & Algorithms', color: 'from-green-400 to-green-600' },
  { name: 'Git', logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",key:'Git', color: 'from-red-500 to-orange-500' },
  { name: 'LaTeX', logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/latex/latex-original.svg",key:'LaTeX', color: 'from-gray-600 to-gray-800' },
  { name: 'Firebase', logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",key:'Firebase', color: 'from-yellow-400 to-orange-500' },
  { name: 'Node.js', logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",key:'Node.js', color: 'from-green-500 to-green-700' },
  { name: 'Express', logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",key:'Express', color: 'from-gray-600 to-gray-800' },
  { name: 'Bootstrap', logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg",key:'Bootstrap', color: 'from-purple-500 to-purple-700' },
  { name: 'React.js', logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",key:'React.js', color: 'from-blue-400 to-cyan-500' },
  { name: 'Tailwind CSS', logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",key:'Tailwind CSS', color: 'from-cyan-400 to-blue-500' }
];
    const [skillsStack,setSkillsStack]=useState([...Skillset]);
    const [skillsContainer,setSkillsContainer]=useState([]);
   
    function RenderStack(){
        return(
            <div className="relative w-24 h-[600px] mx-5">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-2xl border-2 border-gray-700">
                    <div className="p-4 h-full flex flex-col justify-end space-y-2">
                        <AnimatePresence>
                            {skillsStack.slice(0, 8).map((val,index)=>{
                                return(
                                    <motion.div 
                                        key={`stack-${val.name}`}
                                        exit={{ opacity: 0, scale: 0.8,y:50 }}
                                        className="bg-white rounded-lg p-2 shadow-lg"
                                    >
                                     <img src={val.logo} alt={val.name} width="40" height="40" className="mx-auto"/>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg -z-10"></div>
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg -z-20"></div>
            </div>
        )
    } 

    function RenderSkills(){
        return(
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
                <AnimatePresence>
                    {skillsContainer.map((val,index)=>{
                        return(
                            <motion.div
                                key={`skill-${val.name}`}
                                
                                // whileHover={{ 
                                //     scale: 1.1, 
                                //     rotate: 5,
                                //     transition: { duration: 0.2 }
                                // }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group cursor-pointer"
                            >
                                <div className={`bg-gradient-to-br ${val.color} rounded-2xl p-6 shadow-xl transform transition-all duration-300 group-hover:shadow-2xl`}>
                                    <div className="text-center">
                                       
                                            <img 
                                                src={val.logo} 
                                                alt={val.name} 
                                                width="60" 
                                                height="60" 
                                                className="mx-auto filter drop-shadow-lg"
                                            />
                                            <h3 className="text-white font-bold text-lg mb-2">{val.name}</h3>
                                            {/* <p>{val.key}</p> */}
                                       
                                    </div>
                                    
                                    {/* Hover effect overlay */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"
                                    />
                                    
                                    {/* Floating particles effect */}
                                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                        {[...Array(6)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                                initial={{ 
                                                    x: Math.random() * 200, 
                                                    y: Math.random() * 200,
                                                    opacity: 0 
                                                }}
                                                animate={{ 
                                                    y: [null, -20],
                                                    opacity: [0, 1, 0]
                                                }}
                                                transition={{ 
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: i * 0.3,
                                                    ease: "easeOut"
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </div>
        )
    }


        
    useEffect(()=>{
        const interval = setInterval(()=>{
            setSkillsStack((curr)=>{
                if(curr.length === 0) return curr;
                
                const newstack=[...curr];
                const skill=newstack.shift();
                if(skill) {
                    setSkillsContainer((prevContainer) => [...prevContainer, skill]);
                }
                return newstack;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return(
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h1 className="text-responsive-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4">
                    My SkillSet
                </h1>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "200px" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                />
            </motion.div>

            <div className="flex flex-col lg:flex-row items-start justify-center max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="lg:mr-8 mb-8 lg:mb-0"
                >
                    <div className="text-center mb-4">
                        <h2 className="text-2xl font-bold text-white mb-2">Skill Stack</h2>
                        <p className="text-gray-400">Skills waiting to be deployed</p>
                    </div>
                    <RenderStack />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex-1"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">Deployed Skills</h2>
                        <p className="text-gray-400">Ready for action!</p>
                    </div>
                    <RenderSkills />
                </motion.div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
                        initial={{ 
                            x: Math.random() * window.innerWidth, 
                            y: Math.random() * window.innerHeight,
                            opacity: 0 
                        }}
                        animate={{ 
                            y: [null, -100],
                            opacity: [0, 1, 0]
                        }}
                        transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeOut"
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
export default Skills;