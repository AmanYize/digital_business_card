import "./App.css";
import ProfileImg from "./components/Profile";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponents";
function App() {
  return (
    <div className="App">
      <div className="app-body">
        <ProfileImg />
        <MainComponent />
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
