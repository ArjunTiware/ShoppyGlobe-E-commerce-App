import store from "./Store/Appstore";
import { Provider } from "react-redux";
import UserDashboard from "./UserDashboard";

function App() {
  return (
    <Provider store={store}>
      <UserDashboard />
    </Provider>
  );
}

export default App;
