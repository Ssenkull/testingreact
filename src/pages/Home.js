import React, {useState} from "react";

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        if (!inputValue.trim()) {
            alert('Будь ласка, введіть відповідь');
            return;
          }

        const formData = inputValue;
        setInputValue("");
        setIsFormSubmitted(true);

        sendFormData(formData);
    }

    const sendFormData = (formData) => {
        fetch("https://messages-c772a-default-rtdb.europe-west1.firebasedatabase.app/Meals.json", {
            method: 'POST',
            body: JSON.stringify(formData)
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
    }

    return (
        <>
            <h1 className="home-title">Welcome to the Home Page</h1>
            <p>Привіт, як життя?</p>
            <form onSubmit={submitHandler}>
                {/* <label>Відповідь: 
                </label> */}
                <div className="input-n-btn">
                <input className="home-input" type="text" value={inputValue} onChange={inputChangeHandler}/>
                <button className="home-btn" type='submit'>Надіслати відповідь</button>
                </div>
                {isFormSubmitted && <p>Відповідь успішно надіслано! Богдан скоро вам відповість ну або ж не скоро....</p>}
            </form>
        </>
    )
}

export default Home;