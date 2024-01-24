import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/profileComponents/Profile";
import Rete from "./components/networkComponents/Rete";
import MyNav from "./components/MyNav";

function App() {
  return (
    <div>
      <MyNav />
      <Profile />
    </div>
  );
}

export default App;
