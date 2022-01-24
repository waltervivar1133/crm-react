import { BrowserRouter , Routes, Route } from "react-router-dom";
import Login from './layouts/Login';
import Layout from './layouts/Layout';
import Index from "./pages/Index";
import NewCustomer from "./pages/NewCustomer";
import EditCustomer from "./pages/EditCustomer";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <Login /> }>
            <Route index element={ <LoginForm/> } />
          </Route>
          <Route path="/customers" element={ <Layout/> }>
            <Route index element={ <Index/> } />
            <Route path="create" element={ <NewCustomer /> } />
            <Route path="edit/:id" element={ <EditCustomer /> } />
          </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
