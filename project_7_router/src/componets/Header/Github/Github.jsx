import React,{useEffect,useState} from 'react'

function Github(){
    const [data,Setdata]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/aditya1pqr')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            Setdata(data)

        })
    },[])
    return(
        <>
         <div className='text-orange-800 font-extrabold text-xl'>Github follwers:{data.followers} </div>
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </>
       
    )
}
export default Github