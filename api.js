const URL_API='https://api-socket-main-xbxw.onrender.com/'

export const getSensors = async () => {
    const sensorsResponse = await fetch(URL_API)
    const { sockets } = await sensorsResponse.json()
    return sockets
}

export const deleteSensor=async(id)=>{
    const res=await fetch(URL_API+id,{
        method:"DELETE",
        headers:{
            Accept:'application/json',
            "Content-Type":'application/json',
        }
    })
    return await res.json();
}

export const insertSensor=async(id)=>{
    const res=await fetch(URL_API,{
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type":'application/json',
           
        },
        body:JSON.stringify(id)
    });
    return await res.json();
}