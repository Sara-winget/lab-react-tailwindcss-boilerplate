import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-red-500 h-20 flex justify-around items-center px-8 text-white shadow-lg'>
        <div className='flex gap-6 items-center'>
          <h1 className='font-extrabold text-3xl'>Kalvium</h1>
          <ul className='flex gap-4 text-lg'>
            <li className='hover:underline'>About</li>
            <li className='hover:underline'>Contacts</li>
            <li className='hover:underline'>Courses</li>
          </ul>
        </div>
        <button className='border-white border-2 px-6 py-1 rounded-lg hover:bg-white hover:text-red-500 transition-all'>Login</button>
      </div>

      <div className='w-11/12 mx-auto mt-8'>
        <button className='bg-red-600 py-3 px-6 text-white rounded-lg font-semibold mb-10 hover:bg-red-700 transition-all'>Button One</button>
        <div className='bg-red-200 p-5 border-red-500 border-4 rounded-lg text-red-900 font-semibold mb-10'>
          <span className='font-bold'>Alert! </span>This is awesome!
        </div>
        <div className='shadow-xl flex w-1/2 mx-auto p-8 items-center bg-white'>
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" className='w-1/5 h-auto' alt="Kalvium Logo" />
          <div className='pl-6'>
            <p className='font-extrabold text-2xl'>Kalvium Store</p>
            <p className='text-gray-600'>You have a new course!</p>
          </div>
        </div>
      </div>

      <div className='bg-gray-400 text-center py-6 text-base absolute bottom-0 w-full'>
        &copy; 2024 Copyright : Kalvium
      </div>
    </>
  )
}
export default App;