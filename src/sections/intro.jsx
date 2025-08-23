import Navbar from "../components/navbar"
import { useEffect, useState } from "react";
function Intro()
{
    const [name, setName] = useState(['l','a','e','h','b','e','n','P','r']);
    const target=['P','r','a','b','h','l','e','e','n'];
    const [i,setI]=useState(1);
    const[j,setJ]=useState(0);
    const [key,setKey]=useState(null);
    // const[color,setColor]=useState("text-red-500");
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
        }
        
        
    return(updated);
    
    });},300);
    },[i,j,key]);
    var color="text-red-500"
    name.map((index,letter)=>
    {
    if(index===i)
        color="text-yellow-500"
    
    else if(index<i)
    {
        color="text-green-500"
    }
    else
    {
        color="text-red-500"
    }
    return(color)
    })
    return(
    <div className="flex flex-col  bg-black min-h-screen">
    <br></br>
    <Navbar></Navbar>
    <br></br>
    <div className="w-6/12 mt-[100px] ml-[500px]">
    <p className="text-7xl font-bold text-white">Hey There! <br></br></p>
    <br></br>
    <p className="font-serif text-6xl text-white">I'm <br></br>{name.map((char,index)=>(
        
      <span key ={index} style={{color}}>{char}</span>
    ))}!</p>
    <br></br>
    <p className="font-serif text-xl text-white">A budding tech-enthusiast, blending strong algorithmic foundations with<br></br> purposeful development — building real-world
solutions and speaking up <br></br>through code, creativity, and conversation.</p>
    </div>
    <br></br>
    <div className="bg-orange-400 h-32"></div>
    </div>)
}

export default Intro;