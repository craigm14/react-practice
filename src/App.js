import "./App.css";
import Button from "./conponents/Button";
import Card from "./conponents/Card";
import Footer from "./conponents/Footer";
import Student from "./conponents/Student";
import Header from "./conponents/Header";
import UserMessage from "./conponents/UserMessage";
import List from "./conponents/Lists";
//Change true / false to test elements
//test login with true/false loggedIn and username presnt and not presnt
function App() {
  return (
    <>
      <Header />
      <Card />
      <Button />
      <List/>
      <Student name="Craig" age={30} isStudent={true} />
      <Student name="Bart" age={15} isStudent={true} />
      <Student isStudent={false} />
      <UserMessage isLoggedIn={true}  />
      <Footer />
    </>
  );
}

export default App;
