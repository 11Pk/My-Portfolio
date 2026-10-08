function navbar(){
return(
<nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 z-50 mb-20">
  <div className="max-w-7xl mx-auto flex justify-end items-center h-16 px-8">
    <a className="mx-4 font-semibold text-red-400 hover:text-red-300 transition" href="#">
      Me
    </a>
    <a className="mx-4 text-gray-300 hover:text-white transition" href="#skills">
      Skills
    </a>
    <a className="mx-4 text-gray-300 hover:text-white transition" href="#projects">
      Project
    </a>
    <a className="mx-4 text-gray-300 hover:text-white transition">
      Contact
    </a>
  </div>
</nav>

);
}
export default navbar;
