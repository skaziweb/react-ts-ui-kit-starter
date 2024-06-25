import {Button, Logo} from "./components";

function App() {

  return (
      <>
          <Logo/>
          <br/>
          <Logo size="x2"/>
          <br/>
          <Logo size="x3"/>
          <br/>
          <Button text={"Example button"}/>
          <br/>
          <Button text={"Example active button"} active={true}/>
          <br/>
          <Button text={"Example disabled button"} disabled={true}/>
          <br/>
          <Button text={"Example active & disabled button"} active={true} disabled={true}/>
      </>
  )
}

export default App
