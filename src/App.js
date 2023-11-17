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
  const [age, setAge] = useState(0)

  // setTimeout(() => {
  //   console.log(age);
  //   setAge(age + 1)
  // }, 1000)
  return (
    <div className="App">
      {now.getDate()}
      <p>This is React</p>
      <Hello name="你好" age={age + 10} />
      <Hello name="你好" age={age + 2} />
      <Hello name="你好" age={age + 5} />
      <Hello name="你好" age={age + 8} />
    </div>
  );
}

export default App;
