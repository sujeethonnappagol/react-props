export default function Card({desc ,img ,price, title,type ,rating}) {
    return (
        <>
          <div className="border-2 w-[400px] m-5 p-4 rounded-lg border-gray-400" onClick ={()=> alert(`${title} ordered`)}
          >
             <div className="relative">
                <img className='rounded-xl' src={img} alt="" />
                {
                    rating >=4.5 ? <div className="absolute px-2 py-[2px] rounded-full text-sm bg-green-100  text-green-600 bottom-0 m-2">Top Rated</div> : ""
                }
             </div>
             <div className="flex justify-between items-center mt-2">
                <p className="text-1xl font-bold">{title}</p>
                <span className={type==='Veg' ? "bg-green-600 w-3 h-3 rounded-full " : 'bg-red-600 w-3 h-3 rounded-full'}></span>
             </div>
             <p className="mt-2 text-sm"> {desc} </p>
             <div className="flex justify-between items-center mt-2">
                <p className=" text-md text font-semibold">Price: {price}</p>
                {
                    price >=200 ? <span className="text-sm font-bold text-yellow-600">Free Delivary</span> : ""
                }
             </div>
          </div>
        </>
    )
}