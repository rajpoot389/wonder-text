import React,{useState} from 'react'
import Navbar from './Component/Navbar'
import Text_Area from './Component/Text_Area'

const App = () => {
  const[mode,setMode]=useState('light');
  const toggleDarkMode=()=>{
    if(mode==='light'){
      setMode('dark');
    }else{
      setMode('light');
    }
  }
  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} mode={mode}/>
      <Text_Area mode={mode}/>
    </>
  )
}

export default App
