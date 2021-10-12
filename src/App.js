import React, { Component } from "react";
import api from "./API/api";
import "react-toastify/dist/ReactToastify.css";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
