
import axios from "axios"
const ServerURL="https://paynrent-backend-50hljavl6-rrnayak70.vercel.app"
 
const getData=async(url)=>{
    try{
      var response=await fetch(`${ServerURL}/${url}`)
      var result=await response.json()
      return(result)

    }catch(e){
        return(null)
    }

}


 const postData=async(url,body)=>{
    try{
       
    var response= await axios.post(`${ServerURL}/${url}`,body)
     var result=await response.data 
     return(result)
    }
    catch(error)
    { console.log(error)
      
    return(false)
    }
     
    }
    
    export {ServerURL,postData,getData}
