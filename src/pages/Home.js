import React, { useState } from "react";
// import ThemeButton from "../components/ThemeButton";
import {useTheme} from "../hooks/use-theme";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [theme, setTheme] = useState('dark');

  const{theme, setTheme} = useTheme();

  // const toggleTheme = () => {
  //   setTheme(theme === 'dark' ? 'light' : 'dark')
  // }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

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
    <div className="app__container">
    <button onClick={toggleTheme}>Swtich theme</button>
      <h1 className="home-title">Welcome to the Home Page</h1>
      <p className="home-text">Here you can leave some message for creator</p>
      <form onSubmit={submitHandler}>
        <div className="input-n-btn">
        <label htmlFor="name">Your Name:</label>
          <input className="home-input" id="name" type="text" value={nameValue} onChange={nameChangeHandler} />
          <label htmlFor="name">Your Message:</label>
            <input className="home-input" type="text" value={inputValue} onChange={inputChangeHandler}/>
            <button className="home-btn" type='submit'>Send message</button>
        </div>
        {isFormSubmitted && (
          <p>
            Response sent successfully! <br /> Bogdan will answer you soon, or maybe not ....
          </p>
        )}
      </form>
    </div>
  );
};

export default Home;
