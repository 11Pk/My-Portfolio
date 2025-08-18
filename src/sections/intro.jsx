import Navbar from "../components/navbar"

function Intro()
{
    return(
    <div className="bg-orange-500/20 min-h-screen">
    <br></br>
    <Navbar></Navbar>
    <br></br>
    <div className="w-6/12 mt-[100px] ml-[200px]">
    <p className="text-7xl font-bold">Hey There! <br></br></p>
    <br></br>
    <p className="font-serif text-6xl">I am <br></br>Prabhleen Kaur!</p>
    <br></br>
    <p>A budding tech-enthusiast, blending strong algorithmic foundations with<br></br> purposeful development — building real-world
solutions and speaking up <br></br>through code, creativity, and conversation.</p>
    </div>
    <br></br>
    <div className="bg-orange-400 h-32"></div>
    </div>)
}

export default Intro;