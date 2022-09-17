import React, { useState, createContext } from "react";
import { useContext } from "react";

const BankContext = createContext();

const BankProvider = ({ children }) => {
  const [amount, setAmount] = useState("");
  const [bal, setBal] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deposit = () => {
    if (amount === "") {
      window.alert("Please Enter Valid Amount");
    } else if (amount <= 0) {
      window.alert("Please Enter Valid Amount");
    } else if (bal + amount >= 201) {
      window.alert(`Your deposit Limit is ${200 - bal}`);
    } else {
      setShow(true);
      setBal(bal + amount);
      setTimeout(() => {
        setShow(false);
      }, 2000);
      setAmount("");
    }
  };
  const withDraw = () => {
    if (amount === "") {
      window.alert("Please Enter Valid Amount");
    } else if (amount <= 0) {
      window.alert("Please Enter Valid Amount");
    } else if (bal - amount <= -1) {
      window.alert(`Your With Draw limit is ${bal}`);
    } else {
      setShow(true);
      setBal(bal - amount);
      setTimeout(() => {
        setShow(false);
      }, 2000);
      setAmount("");
    }
  };

  return (
    <BankContext.Provider
      value={{
        amount,
        bal,
        setAmount,
        show,
        withDraw,
        deposit,
        handleShow,
        handleClose,
      }}
    >
      {children}
    </BankContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(BankContext);
};
export { BankContext, BankProvider };
