const Hero = () => {
  return (
    <div className="relative items-center justify-center text-center top-[170px] pb-[300px]">
    
        <p className="font-bold text-blue-400 ">Welcome</p>

        <div className="relative top-[20px]">
          <h1 className="font-bold text-white text-5xl leading-[70px]">Selling on the<br/>internet like a pro</h1>
          <p className="relative text-white top-[35px] text-[20px]">We know how large objects will act, but the things on a<br/>small just do not act that way.</p>
        </div>

        <div className="relative flex items-center justify-center top-[100px] gap-[20px]">
            <button className="w-[200px] p-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-200">Get Quote Now</button>
            <button className="w-[150px] p-4 border border-blue-500 text-blue-500 font-bold rounded-md">Learn more</button>
        </div>

     


     <div className="relative left-[15%] top-[200px] items-center justify-center grid grid-cols-4 gap-6">
    
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="h-16 w-16 bg-red-200 rounded mb-4"></div>
      <h2 className="text-xl font-bold text-gray-800">Training Courses</h2>
      <p className="text-sm text-gray-600 mt-2">The gradual accumulation of<br/>information about atomic and<br/>small scale behaviour...</p>
    </div>

    
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="h-16 w-16 bg-green-200 rounded mb-4"></div>
      <h2 className="text-xl font-bold text-gray-800">2,769 online courses</h2>
      <p className="text-sm text-gray-600 mt-2">The gradual accumulation of<br/>information about atomic and<br/>small scale behaviour...</p>
    </div>

    
    <div className="bg-blue-500 p-6 rounded-lg shadow-md ">
      <div className="h-16 w-16 bg-white rounded mb-4"></div>
      <h2 className="text-xl font-bold text-white">Training Courses</h2>
      <p className="text-sm text-white mt-2">The gradual accumulation of<br/>information about atomic and<br/>small scale behaviour...</p>
    </div>
  </div>
     
     </div>
     
    
  )
}

export default Hero
