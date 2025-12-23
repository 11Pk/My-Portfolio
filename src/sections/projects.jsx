import { motion } from "motion/react";
import { useState } from "react";
import readycle from "../assets/images/readcycle.png";
import tictactoe from "../assets/images/TicTacToe.png";
import doodlequest from "../assets/images/doodlequest.png";
import portfolio from "../assets/images/portfolio.png";
import retirewell from "../assets/images/retirewell.png";
function Projects() {
    const projects = [
        {
            id: 1,
            title: "ReadCycle Website",
            description: "Readcycle is a web app designed to make it easier for individuals to give away or find books that match their educational needs.Our goal is to build a sustainable community where books find new homes instead of being thrown away.This will help in reducing waste and promote the joy of reading.",
            technologies: ["Html5", "Firebase", "CSS3", "JavaScript"],
            image: readycle,
            github: "https://github.com/11Pk/ReadCycle-Website.git",
            live: "#",
            featured: true
        },
        {
            id: 2,
            title: "Tic Tac Toe Game",
            description: "A simple and fun implementation of the classic Tic Tac Toe game",
            technologies: ["JavaScript", "HTML5", "CSS3"],
            image: tictactoe,
            github: "https://github.com/11Pk/Tic-Tac-Toe-Game.git",
            live: "#",
            featured: false
        },
        {
            id: 3,
            title: "DoodleQuest Website",
            description: "An AI-powered play and learn platform where kids learn while doodling and enjoy personalized stories and quizzes.",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            image: doodlequest,
            github: "https://github.com/Vrinda2403/Doodle_Quest.git",
            live: "#",
            featured: true
        },
        {
            id: 4,
            title: "My Portfolio",
            description: "This very portfolio website showcasing my skills, projects, and experience with modern animations and responsive design.",
            technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
            image: portfolio,
            github: "#",
            live: "#",
            featured: false
        },
        {
            id: 5,
            title: "RetireWell Website",
            description: "A comprehensive after retirement platform offering personalized health advice,memory place and ehnacing social circle.",
            technologies: ["React", "Tailwind CSS", "MongoDB", "Express.js","Node.js"],
            image: retirewell,
            github: "#",
            live: "#",
            featured: true
        }
    ];

    

    // const containerVariants = {
    //     hidden: { opacity: 0 },
    //     visible: {
    //         opacity: 1,
    //         transition: {
    //             staggerChildren: 0.2,
    //             delayChildren: 0.3
    //         }
    //     }
    // };

  

    const ProjectCard = ({ project, index }) => (
        <motion.div
           
            className={`relative group cursor-pointer ${project.featured ? 'lg:col-span-2' : ''}`}
        >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl h-full">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                        <motion.div
                            // initial={{ opacity: 0, scale: 0 }}
                            // animate={{ opacity: 1, scale: 1 }}
                            // transition={{ delay: index * 0.1 + 0.5 }}
                            className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                        >
                            ⭐ Featured
                        </motion.div>
                    )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                    <motion.h3
                       
                        className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300"
                    >
                        {project.title}
                    </motion.h3>
                    
                    <motion.p
                        
                        className="text-gray-300 mb-4 leading-relaxed"
                    >
                        {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div
                        
                        className="flex flex-wrap gap-2 mb-6"
                    >
                        {project.technologies.map((tech, techIndex) => (
                            <motion.span
                                key={tech}
                               
                                className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full font-medium shadow-lg"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                       
                        className="flex space-x-4"
                    >
                        <motion.a
                            href={project.github}
                            
                            className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-4 py-2 rounded-lg text-center font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            📁 GitHub
                        </motion.a>
                        <motion.a
                            href={project.live}
                          
                            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white px-4 py-2 rounded-lg text-center font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            🚀 Live Demo
                        </motion.a>
                    </motion.div>
                </div>


                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                            initial={{ 
                                x: Math.random() * 400, 
                                y: Math.random() * 400,
                                opacity: 0 
                            }}
                            animate={{ 
                                y: [null, -30],
                                opacity: [0, 1, 0]
                            }}
                            transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeOut"
                            }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 px-6"
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-responsive-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-4"
                >
                    Projects.json
                </motion.h1>
                
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                >
                    A collection of my creative endeavors and technical projects, each representing a unique challenge and learning opportunity.
                </motion.p>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "200px" }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-1 bg-gradient-to-r from-green-500 to-purple-500 mx-auto rounded-full"
                />
            </motion.div>

            {/* Projects Grid */}
            <motion.div
               
                className="max-w-7xl mx-auto px-4 sm:px-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </motion.div>

          

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-center mt-16 px-6"
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                >
                    <a
                        href="#contact"
                        className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
                    >
                        Let's Build Something Together! 🚀
                    </a>
                </motion.div>
            </motion.div>
</div>
    );
}

export default Projects;