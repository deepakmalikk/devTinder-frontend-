import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Feed from "./components/Feed";
import Connection from "./components/Connection";
import Request from "./components/Requests";

function App() {
  return (
   <Provider store={appStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="login" element={<Login />} />
          <Route path="feed" element={<Feed />} />
          <Route path="profile" element={<Profile />} />
          <Route path="connection" element={<Connection />} />
          <Route path="request" element={<Request />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
   </Provider>
  )
}
export default App;
