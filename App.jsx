import { useState } from 'react';
import axios from 'axios'
import './App.css'

function App() {
 const [image, setimage] = useState([])
  const datacall=async () => { 
try{
  console.log("image get");
  const response=await axios.get("https://picsum.photos/v2/list");
const data=response.data;
console.log(image)
setimage(data)
}catch(er){
  console.log('error');
}
  }
  
  return (
    <>
    <button onClick={datacall}>Get Image</button>
    <div className="image">
{image.map((ele,i)=>{
   return(<div className="image"> <img src={ele.download_url} key={i} width={300} height={300}/>
   <h1>{ele.author}</h1>
   </div>
   )
  
})}
    </div>
    </>
  )
}

export default App;
