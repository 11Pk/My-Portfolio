import Navbar from "../components/navbar"
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import code from "../assets/images/code.png";
import LeetCodeStats from "../components/leetcode-stats";
import Reviews from "../components/reviews";
function Intro()
{
    const [name, setName] = useState(['l','a','e','h','b','e','n','P','r']);
    const target=['P','r','a','b','h','l','e','e','n'];
    const [i,setI]=useState(1);
    const[j,setJ]=useState(0);
    const [key,setKey]=useState(null);
    const [sortingProgress, setSortingProgress] = useState(0);
	// Tech logos for marquee strip
	const techLogos = [
		{ name: 'HTML5', src: 'https://cdn.simpleicons.org/html5/E34F26' },
		{ name: 'CSS3', src: 'https://cdn.simpleicons.org/css3/1572B6' },
		{ name: 'JavaScript', src: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
		{ name: 'React', src: 'https://cdn.simpleicons.org/react/61DAFB' },
		{ name: 'Tailwind CSS', src: 'https://cdn.simpleicons.org/tailwindcss/38B2AC' },
		{ name: 'Node.js', src: 'https://cdn.simpleicons.org/nodedotjs/339933' },
		{ name: 'Firebase', src: 'https://cdn.simpleicons.org/firebase/FFCA28' },
		{ name: 'Git', src: 'https://cdn.simpleicons.org/git/F05032' }
	];
   

    // Function to determine color for each character based on insertion sort algorithm
    const getCharacterColor = (charIndex) => {
        if (charIndex < i) {
            return "text-green-500"; // Sorted portion
        } else if (charIndex === i) {
            return "text-yellow-500"; // Currently being sorted
        } else {
            return "text-red-500"; // Unsorted portion
        }
    };

    useEffect(()=>{
        if(i<target.length)
        setTimeout(()=>{setName((currName)=>{

            if(key=== null)
            {
              setJ(i-1);
              setKey(currName[i]);
              return currName;
            }
        const updated=[...currName];
        const targetIndex=target.indexOf(key)
        const currtargetIndex=target.indexOf(updated[j]);
        if(j>=0 && currtargetIndex>targetIndex)
        {
        updated[j+1]=updated[j];
        setJ(j-1);
        }
        else
        {
            updated[j+1]=key;
            setI(i+1);
            setKey(null);
            // Update progress
            const progress = ((i + 1) / target.length) * 100;
            setSortingProgress(progress);
        }
        
    return(updated);
    
    });},300);
    },[i,j,key]);

 
  
    return(
    <div className="flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
    
    <Navbar></Navbar>
    {/* <br></br> */}
    {/* <div className="flex "> */}
    <div className="w-full max-w-4xl mx-auto px-6 mt-[20px]">
    <motion.p 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-responsive-3xl font-bold text-white"
    >
        Hey There! <br></br>
    </motion.p>
    <br></br>
    <motion.p 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-serif text-responsive-2xl text-white"
    >
        I'm <br></br>
        <span className="inline-flex">
            {name.map((char,index)=>(
                <motion.span 
                    key={index} 
                    className={getCharacterColor(index)}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                >
                    {char}
                </motion.span>
            ))}
        </span>!
    </motion.p>
    
    <code></code>
    <div ><img src={code} alt="Code description" className="absolute right-60 top-36"></img></div>
    {/* <br></br> */}
    
    {/* Beautiful Loading Bar */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-8"
    >
        <div className="flex items-center space-x-4 mb-4">
            <span className="text-white text-lg font-medium">Sorting Progress:</span>
            <span className="text-blue-400 text-lg font-bold">{Math.round(sortingProgress)}%</span>
        </div>
        
        
        <div className="mb-4">
            <p className="text-gray-300 text-sm mb-2"></p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-white">Sorted</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <span className="text-white">Currently Sorting</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-white">Unsorted</span>
                </div>
            </div>
        </div>
        
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden shadow-lg">
            <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${sortingProgress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
               
            </motion.div>
        </div>
        
      
    </motion.div>
    
    <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="font-serif text-xl text-gray-300 mt-8 leading-relaxed"
    >
        A budding tech-enthusiast, blending strong algorithmic foundations with<br></br> 
        purposeful development — building real-world solutions and speaking up <br></br>
        through code, creativity, and conversation.
    </motion.p>

	{/* Moving tech logos strip */}
	<div className="mt-10">
		<div className="marquee py-4 bg-black/30 border-y border-white/10">
			
			<div className="marquee__track">
				{techLogos.concat(techLogos).map((logo, idx) => (
					<div key={idx} className="marquee__item">
						<img
							src={logo.src}
							alt={logo.name}
							className="h-10 w-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
						/>
					</div>
				))}
			</div>
		</div>
	</div>

	{/* LeetCode Stats and Reviews Section */}
	
	</div>
    <br></br>
    <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "8rem" }}
        transition={{ duration: 1, delay: 1.2 }}
        className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 h-32 shadow-2xl"
    />
    </div>)
}

export default Intro;