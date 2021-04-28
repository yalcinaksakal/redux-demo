// import Counter from "./components/Counter";
// import CounterClassBased from "./components/CounterClassBased";
import Counter from "./components/CounterReduxToolkit";
import CounterClassBased from "./components/CounterClassBasedReduxToolkit";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated } = useSelector(state => state.auth);
 
  return (
    <>
      <Header></Header>
      {!isAuthenticated ? <Auth /> : <UserProfile />}
      <Counter />
      <CounterClassBased />
    </>
  );
}

export default App;
