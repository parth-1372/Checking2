import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data2 = useLoaderData()
    const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/parth-1372')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

  return (
    <div 
    className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data2.followers}
    <img src={data2.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/parth-1372')
    return response.json()
}