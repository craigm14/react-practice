import "./App.css";
import Button from "./conponents/Button";
import Card from "./conponents/Card";
import Footer from "./conponents/Footer";
import Student from "./conponents/Student";
import Header from "./conponents/Header";
import UserMessage from "./conponents/UserMessage";
import List from "./conponents/Lists";
import Count from "./conponents/Count";
import User from "./conponents/User";
import ColorPicker from "./conponents/colorPicker";
import Counter from "./conponents/Counter";


//Change true / false to test elements
//test login with true/false loggedIn and username presnt and not presnt
function App() {
  return (
    <>
      <Header />
      <Card />
      <Button />
      <hr></hr>
      <List/>
      <hr></hr>
      <Student name="Craig" age={30} isStudent={true} />
      <Student name="Bart" age={15} isStudent={true} />
      <Student isStudent={false} />
      <hr></hr>
      <UserMessage isLoggedIn={true}  />
      <hr></hr>
      <Count/>
      <hr></hr>
      <Counter/>
      <hr></hr>
      <br></br>
      <User/>
      <ColorPicker/>
      <Footer />
    </>
  );
}

export default App;
