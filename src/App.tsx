import "./App.css";
import OrderSummary from "./components/OrderSummary";
import backgroundMobile from "./assets/images/pattern-background-mobile.svg";

function App() {
  return (
    <div
      className="grid min-h-full place-items-center content-center bg-primary-pale-blue bg-[url('./assets/images/pattern-background-mobile.svg')] 
    bg-contain bg-no-repeat align-middle md:bg-[url('./assets/images/pattern-background-desktop.svg')]"
    >
      <OrderSummary />
      <div className="  w-[90%] text-center">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="   whitespace-nowrap text-primary-bright-blue" href="#">
          Wojciech Grochecki
        </a>
        .
      </div>
    </div>
  );
}

export default App;
