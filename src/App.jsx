import React, { useEffect,useState } from 'react'

const App = () => {
  const [image, setImage] = useState([])
  const [search, setSearch] = useState("")
  const url =`https://api.unsplash.com/photos?client_id=TqmcRonH3AnaDO0QZAK98leGtd086yqmCegXYoXg39Y`
  useEffect(()=>{
  async  function gallery(){

    const res =await fetch(url);
    const data =await res.json();
    console.log(data)
    setImage(data)

    }
    gallery()
  },[])
  const handleClick = async ()=>{
    const api = `https://api.unsplash.com/search/photos?&query=${search}&client_id=TqmcRonH3AnaDO0QZAK98leGtd086yqmCegXYoXg39Y`
    const res1 =await fetch(api);
    const data1 =await res1.json();
    console.log(data1)
    setImage(data1.results )

  }
  return (
    <div>
      














































































































































~































      <input
      onChange={(e)=>{
        setSearch(e.target.value)
      }}
       type="text" />
       <button onClick={handleClick}>Click Me</button>


       <div>
       {
        image.map((img)=>{
          const {urls,likes,id }=img
          return(
            <>
            <img src={urls.small} alt="" />
            <h1>{likes}</h1>
            </>
          )
        })
      }

       </div>
 
      
      
    </div>
  )
}

export default App

