import "./App.css";
import Button from "./conponents/Button";
import Card from "./conponents/Card";
import Footer from "./conponents/Footer";
import Student from "./conponents/Student";
import Header from "./conponents/Header";

function App() {
  return (
    <>
      <Header />
      <Card />
      <Button />
      <Student name="Craig" age={30} isStudent={true} />
      <Student name="Bart" age={15} isStudent={true} />
      <Student isStudent={false} />
      <Footer />
    </>
  );
}

export default App;
