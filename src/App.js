import CakeView from "../src/feature/cake/cakeView";
import IcecreamView from "../src/feature/icecream/icecreamView";
import UserView from "../src/feature/user/userView";

function App() {
    return (
        <div className="App">
            <CakeView />
            <IcecreamView />
            <UserView />
        </div>
    );
}

export default App;
