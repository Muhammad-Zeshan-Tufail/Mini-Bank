import { Container } from "react-bootstrap";
import Signup from "./Components/Auth/Signup";
import Login from "./Components/Auth/Login";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Routes, Route } from "react-router-dom";
import BalanceCounter from "./Components/balanceCounter/BalanceCounter";
import ProtectedRoutes from "./ProtectedRoutes";
import {BankProvider} from "./context/BankContext"

function App() {
  return (
    <Container>
      <UserAuthContextProvider>
        <BankProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoutes>
                  <BalanceCounter />
                </ProtectedRoutes>
              }
            />
            <Route path="signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BankProvider>
      </UserAuthContextProvider>
    </Container>
  );
}

export default App;
