import { useState , useCallback , useEffect ,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length , setlength] = useState(8)
  const [numallow , setnumallow ] = useState(false)
  const [charallow , secharallow] = useState(false)
  const [password , setpassword] = useState("")

  //use of useref hook
  let passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklpmnopqrstuvwxyz"
    
    if(numallow){
      str += "0123456789"
    }
    if(charallow){
      str += "!@#$%^&*()_~{}'?><.,;:[]"
    }

    for (let index = 0; index < length; index++) {
      let i = Math.floor(Math.random() * str.length)
      let char = str[i]
      pass += char
    }
    setpassword(pass);
  }, [length,numallow,charallow,setpassword])
 
  useEffect(() => {
    passwordGenerator();
  }, [length, numallow, charallow, passwordGenerator]);
  
  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
    <div className="bg-gray-800 p-4 
     item-centre  rounded-xl">
  <h1 className="text-4xl font-bold">Password Generator</h1>
  <div className='flex items-center'>
    <input
      className='text-2xl border-2 border-black bg-white text-black text-left p-1 m-1 mt-4 rounded-xl w-full'
      type='text'
      value={password}
      placeholder='Password'
      readOnly
      ref={passwordRef}
    />
    <button 
    className='text-white bg-blue-800 h-10 mt-3 rounded-xl
     text-center hover:bg-blue-950 hover:duration-5000 '
     onClick={copyPasswordToClipBoard}>COPY</button>
  </div>
  <div>
    <div className='m-2 items-center'>
      <input 
      type="range"
      min={8}
      max={20}
      className="cursor-pointer text-2xl"
      defaultValue={8} 
      onChange={(e) => {setlength(e.target.value)}}/>
     <label className='p-2 ' >Length : {length} </label>  
    </div>
    <div className='flex justify-evenly mt-2'>
    <div>
      <input 
      className='bg-white'
      type="checkbox" 
      defaultValue={numallow}
      onChange={()=>{
        setnumallow((prev)=>!prev);
      }}/>
      <label className='p-1' >Number {}</label>
    </div> 
    <div>
      <input 
      type="checkbox" 
      defaultValue={charallow}
      onChange={()=>{
        setnumallow((prev) => !prev);
      }}/>
      <label className='p-2 '>Special Character {}</label>
    </div>
    </div>
  </div>
</div>

    </>
  )
}

export default App
