import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Contex";

const ListSong = () => {
  const { Data ,handleClick,song} = useContext(Songs);
  const [idSong,setIdSong] = useState(0);
  const handlePlaySong =(idSong)=>{
setIdSong(idSong)
handleClick(idSong)
  }
  useEffect(() => {
   
    setIdSong(song.id)
  
  }, [song]);
  return (
    <div className="col-span-2 overflow-y-scroll">
      <label className="table-auto inline-table w-full mt-6 cursor-pointer ">
        <thead className="text-white border-2 border-white sticky top-0 bg-slate-700 h-12">
          <th className="">#</th>
          <th className=" text-start">Title</th>
          <th className="">Author</th>
          <th className="text-start">
            <i className="fa fa-download"></i>
          </th>
        </thead>
        <tbody className="">
          {Data.map((song,index) => {
            return (
              <tr key={index} className={`bg-slate-800 h-12 text-gray-500 hover:bg-gray-600 hover:text-teal-300 ${idSong == song.id && 'bg-gray-600 text-teal-300'}`} onClick={()=>handlePlaySong(song.id)}>
                <td className="">{index +1}</td>
                <td className="text-start">{song.name}</td>
                <td className="text-center">{song.author}</td>
                <td className=""><a href={song.url}><i className="fa fa-download"></i></a></td>
              </tr>
            );
          })}
        </tbody>
      </label>
    </div>
  );
};

export default ListSong;
