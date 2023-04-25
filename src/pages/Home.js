import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setNameValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!inputValue.trim() || !nameValue.trim()) {
      alert("Please enter your name and message");
      return;
    }

    const formData = {
      name: nameValue,
      message: inputValue,
    };
    setInputValue("");
    setNameValue("");
    setIsFormSubmitted(true);

    sendFormData(formData);
  };

  const sendFormData = (formData) => {
    fetch("https://messages-c772a-default-rtdb.europe-west1.firebasedatabase.app/Meals.json", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data sent successfully", data);
      })
      .catch((error) => {
        console.error("Error sending data", error);
      });
  };

  return (
    <>
      <h1 className="home-title">Welcome to the Home Page</h1>
      <p className="home-text">Here you can leave some message for creator</p>
      <form onSubmit={submitHandler}>
        <div className="input-n-btn">
        <label htmlFor="name">Your Name:</label>
          <input className="home-input" id="name" type="text" value={nameValue} onChange={nameChangeHandler} />
          <label htmlFor="name">Your Message:</label>
            <input className="home-input" type="text" value={inputValue} onChange={inputChangeHandler}/>
            <button className="home-btn" type='submit'>Надіслати відповідь</button>
        </div>
        {isFormSubmitted && (
          <p>
            Response sent successfully! <br /> Bogdan will answer you soon, or maybe not ....
          </p>
        )}
      </form>
    </>
  );
};

export default Home;
