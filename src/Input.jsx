import React, { useContext, useState } from 'react'
import {MyContext} from "./context/MyContext";
import "./Input.css";

export default function Input() {

  const {data, setData, editIndex, setEditIndex, values, setValues}=useContext(MyContext);

  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");

  function addValues() {
    setError1("");
    setError2("");
    setError3("");

    if (
      !values.details &&
      values.amount <= 0 &&
      values.type !== "Income" &&
      values.type !== "Expense"
    ) {
      setError1(`Details can't be null `);
      setError2(`Amount should be greater than zero `);
      setError3(`Choose a valid category `);
      return;
    } else if (!values.details && values.amount <= 0) {
      setError1(`Details can't be null `);
      setError2(`Amount should be greater than zero `);
      return;
    } else if (
      !values.details &&
      values.type !== "Income" &&
      values.type !== "Expense"
    ) {
      setError1(`Details can't be null `);
      setError3(`Choose a valid category `);
      return;
    } else if (
      values.amount <= 0 &&
      values.type !== "Income" &&
      values.type !== "Expense"
    ) {
      setError2(`Amount should be greater than zero `);
      setError3(`Choose a valid category `);
      return;
    } else if (!values.details) {
      setError1(`Details can't be null `);

      return;
    } else if (values.amount <= 0) {
      setError1("");
      setError2(`Amount should be greater than zero `);

      return;
    } else if (values.type !== "Income" && values.type !== "Expense") {
      setError3(`Choose a valid category `);

      return;
    }

    let updatedData;

    if (editIndex !== null) {
      updatedData = [...data];
      updatedData[editIndex] = values;
      setEditIndex(null);
    } else {
      updatedData = [...data, values];
    }

    setData(updatedData);
    setValues({ details: "", amount: "", type: "" });
  }

  function handleDetails(event) {
    setValues({ ...values, details: event.target.value });
  }

  function handleAmount(event) {
    setValues({ ...values, amount: event.target.value });
  }

  function handleType(event) {
    setValues({ ...values, type: event.target.value });
  }

  return (
    <div className="input-list">
      <h1>Input Form</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your details"
          value={values.details}
          onChange={handleDetails}
        />
        <br />
        {error1 && <div className="Error1">{error1}</div>}

        <input
          type="number"
          placeholder="Enter the amount"
          value={values.amount}
          onChange={handleAmount}
        />
        <br />
        {error2 && <div className="Error2">{error2}</div>}

        <select name="type" value={values.type} onChange={handleType}>
          <option value="">Select Type</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <br />
        {error3 && <div className="Error3">{error3}</div>}

        <button className="add-button" onClick={addValues}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
}
