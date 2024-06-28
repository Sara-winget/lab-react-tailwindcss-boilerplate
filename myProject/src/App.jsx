import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-red-600 h-16 flex justify-between items-center px-6 text-white'>
        <div className='flex gap-5 items-center'>
          <h1 className='font-bold text-2xl'>Kalvium</h1>
          <ul className='flex gap-3'>
            <li>About</li>
            <li>Contacts</li>
            <li>Courses</li>
          </ul>
        </div>
        <button className='border-white border-[1px] px-4 rounded-md'>Login</button>
      </div>

      <div className='w-[85%] mx-auto'>
        <button className='bg-blue-500 py-2 px-4 text-white rounded-md font-medium my-8'>Button One</button>
        <div className='bg-red-100 p-4 border-red-400 border-[2px] rounded-md text-red-800 font-normal mb-8'>
          <span className='font-bold'>Alert! </span>This is awesome!
        </div>
        <div className='shadow-2xl flex w-[45%] mx-auto p-6 items-center'>
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" className='w-[10vw] h-[5vh]' alt="Kalvium Logo" />
          <div className='pl-4'>
            <p className='font-bold text-[25px]'>Kalvium Store</p>
            <p className='text-gray-500'>You have a new course!</p>
          </div>
        </div>
      </div>

      <div className='bg-gray-300 text-center py-5 text-sm absolute bottom-0 w-[100%]'>
        &copy; 2024 Copyright : Kalvium
      </div>
    </>
  )
}

export default App
