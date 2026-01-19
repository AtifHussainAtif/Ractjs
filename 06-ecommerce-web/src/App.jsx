
import './App.css'
import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import Section2 from './components/section2/section2'

function App() {

    const RightDetails = [
        {
            type: "Men's Fashion",
            items: 153,
            background:'#bee2d6',
        },
        {
            type: "Kids's Fashion",
            items: 172,
            background:'#d6d4f0',
        },
        {
            type: "Cosmetics",
            items: 150,
            background:'#fedbe5',
        },
        {
            type: "Accessories",
            items: 124,
            background:'#cee2f5',
        }
    ]

    return(
        <div className=''>
            <Navbar />
            <Hero details={RightDetails}/>
            <Section2 />
        </div>
    )
}

export default App
