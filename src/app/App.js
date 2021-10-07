import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./common/header/header";
import Footer from "./common/footer/footer";
import Main from "./common/main/main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header logo="My Logo Here" />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
