import "./App.css";
import OrderSummary from "./components/OrderSummary";
import backgroundMobile from "./assets/images/pattern-background-mobile.svg";

function App() {
  return (
    <div
      className="grid h-full place-items-center bg-primary-pale-blue 
    bg-[url('./assets/images/pattern-background-mobile.svg')] bg-contain bg-no-repeat md:bg-[url('./assets/images/pattern-background-desktop.svg')]"
    >
      <OrderSummary />
    </div>
  );
}

export default App;
