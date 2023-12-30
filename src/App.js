import './App.css'
// import pi, * as components from './Math.js'
// import * as calculator from './Calculator.js'

const fname = 'Hiba'
const lname = 'Azhar'
const fullname = fname + ' ' + lname
var lnum = 6

let currentDate = new Date()
let currentYear = currentDate.getFullYear()

var varimage = 'https://picsum.photos/300/300?grayscale'
function App() {
  return (
    // math.js is used
    // <ul>
    //   <li>{pi}</li>
    //   <li>{components.doublePi()}</li>
    //   <li>{components.triplePi()}</li>
    // </ul>

    // calculator.js is used
    // <ul>
    //   <li>Addition: {calculator.add(1, 2)} </li>
    //   <li>Subtraction: {calculator.subtract(2, 3)}</li>
    //   <li>Multiplication:{calculator.multiply(7, 2)} </li>
    //   <li>Division: {calculator.divide(5, 2)}</li>
    // </ul>

    //food challenge done
    // <>
    // we can either use a div tag in place if fragments
    //   <h1>My Favorite Food</h1>
    //   <ul>
    //     <li>Hiba</li>
    //     <li>Bibba</li>
    //     <li>Top pops ki seeti</li>
    //   </ul>
    // </>

    // challenge of name and lucky number
    // <>
    //   <h1>
    //     hello {fname} {lname}
    //     <br />
    //     Hello {fullname}
    //     <br />
    //     Hello {`${fname} ${lname}`}
    //   </h1>
    //   <p>my lucky number is :{lnum}</p>
    // </>

    // challenge of two paragraphs, one of name and the other of current year
    // <>
    //   <p>Created By {fullname}</p>
    //   <p>Copyright {currentYear}</p>
    //   <h1>I am not a good student</h1>
    // </>

    // styling

    // image through image-address
    // <>
    //   <h1 className='heading' contentEditable='true' spellCheck='false'>
    //     This is editable text
    //   </h1>
    //   <img
    //     src='https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=sph'
    //     alt='nature image'
    //     className='nature-img'
    //   />
    // </>
    <>
      <img src={varimage} alt='image from lorem picsum' />
    </>
  )
}

export default App
