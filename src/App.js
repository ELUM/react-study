import { useState } from "react"

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>{bornYear()}</p>
      <p>Hello{name}{age}</p>
    </div>
  )
}

function App() {
  const now = new Date()
  const [counter, setCounter] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering...', counter)
  return (
    <div className="App">
      {now.getDate()}
      <p>This is React</p>
      <Hello name="你好" age={counter + 10} />
      <Hello name="你好" age={counter + 2} />
      <Hello name="你好" age={counter + 5} />
      <Hello name="你好" age={counter + 8} />
    </div>
  );
}

export default App;
