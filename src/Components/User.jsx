function User({ name, profession, image }){
    return(
        <>
           <div className="px-5 py-2 m-7 rounded-md w-[400px] bg-white mx-auto flex justify-between items-center">
              <div className="items-center gap-4 flex">
                  <img className=" h-12 w-14 object-cover rounded-full" src={image} alt="" />
                <div className="items-center">
                   <p className="text-1xl ">{name}</p>
                   <p className="text-sm">{profession}</p>
                </div>
              </div>
              <button onClick={() => alert(`Followed request sent to ${name}`)} className=" text--black px-3 font-bold py-2 rounded-lg">Follow</button>
           </div>
        </>
    )
}

export default User;