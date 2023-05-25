
import './App.css';
import Navbar from './Component/Navbar';
import DetailSong from './Component/DetailSong';
import ListSong from './Component/ListSong';
import { Songs } from './Contex';
import Data from './songs.json'
import Playing from './Component/Playing';
import { useState } from 'react';
function App() {
  const [song,setSong]= useState(Data[0])
  const handleClick = (idSong)=>{
    const song1 = Data.find(song=>song.id === idSong)
    if(!song1){
      setSong(Data[0])
    }
    else
    setSong(song1)
  }
  return (
    <div className="App">
     <Songs.Provider value={{Data,song,handleClick}}>
     <Navbar/>
     <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
      <DetailSong/>
      <ListSong/>
     </div>
     <Playing/>
     </Songs.Provider>
    </div>
  );
}

export default App;
