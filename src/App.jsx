import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

import './App.css'

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {


  return (
    <div className='h-[100vh] flex-center'>
      <h1 className='text-red-500   text-6xl'>hello gsap</h1>
    </div>
  )
}

export default App
