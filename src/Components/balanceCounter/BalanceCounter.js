import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row
} from "react-bootstrap";
import { useGlobalContext } from "../../context/BankContext";
import Popup from "./Modal";
import logo from "../../Assets/logo.png";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const BalanceCounter = () => {
  const navigate = useNavigate();
  const { user, logOut } = useUserAuth();
  const { bal, amount, setAmount, deposit, show, withDraw } =
    useGlobalContext();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      {show && <Popup />}
      <Button onClick={handleLogOut} variant="link">
        Log Out
      </Button>
      <Row className="d-flex justify-content-center my-5">
        <Col className="col-12 col-md-6">
          <div>Welcome: {user && user.email} </div>
          <Card className="shadow p-4 border-0">
            <div className="d-flex align-items-center bank-logo mx-auto">
              <Image src={logo} />
            </div>
            <h2 className="text-center mb-4">Welcome To Your Personal Bank</h2>
            <div className="text-center mb-4">
              <div className="shadow-sm border p-3 w-auto">
                <h6>Balance</h6>
                <h5>{bal}</h5>
              </div>
              <div className="col-12 col-lg-6 mx-auto">
                <input
                  className="form-control my-4"
                  type="number"
                  value={amount}
                  required
                  onChange={(e) => setAmount(+e.target.value)}
                  placeholder="Enter Amount"
                />
              </div>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Button className="w-50" onClick={deposit}>
                  Deposit
                </Button>
                <Button className="w-50" onClick={withDraw}>
                  With Draw
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BalanceCounter;
