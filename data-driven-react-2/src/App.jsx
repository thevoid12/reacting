import { useState } from 'react'
import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import Data from './data.js'
import './App.css'

function App() {
  // data contains array of js object which we need to convert into array of jsx Array element [<Entry sgdfsdfg/>,<Entry sgfsdgf/>,<Entry fdgdf/>,<Entry dfgjsdh/>]
  const Datajsx= Data.map((item)=>{
    return <Entry 
    key={item.id} // unique value which we need to pass on to the prop for react to uniquely identify 
    // img={{
    //   src:item.img.src,
    //   alt:item.img.alt
    // }}
    // title={item.title}
    // country={item.country}
    // googleMapsLink={item.googleMapsLink}
    // dates={item.dates}
    // text={item.text}
    {...item} // this is same as above using spread operator
  />
  })
  return (
    <>
    <Header />
    {Datajsx}
    </>
  )
}

export default App
