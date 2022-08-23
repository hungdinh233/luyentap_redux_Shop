import GiaoDienGioHang from "./BaiTapGioHang/GiaoDienGioHang";
import { Provider } from "react-redux";
import { store } from "./Redux/ConfigStore";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GiaoDienGioHang />
      </Provider>
    </div>
  );
}

export default App;
