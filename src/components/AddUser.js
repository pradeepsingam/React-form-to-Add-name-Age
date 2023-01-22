import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    // const [enteredUserName, setEnteredUserName] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const nameInputRef = useRef('');
    const ageInputRef = useRef('');


    const addUserHandler = (event) => {
        event.preventDefault();

        const nameInput = nameInputRef.current.value;
        const ageInput = ageInputRef.current.value;

        if (nameInput.trim().length === 0 || ageInput.length === 0) {
            setErrorMessage("Invalid inputs");
        }
        if (ageInput < 1) {
            setErrorMessage("Invalid Age");
        }
        props.onAddUser(nameInput, ageInput);

    };
    // const usernameChangeHandler = (event) => {
    //     setEnteredUserName(event.target.value);
    // }
    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }

    const ErrorHandler = () => {
        setErrorMessage(null);
    }


    return (
        <div>
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    // onChange={usernameChangeHandler} 
                    />

                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}

                    // onChange={ageChangeHandler} 
                    />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
            {errorMessage && <ErrorModal title="Oops.. One Error" message={errorMessage} onConfirm={ErrorHandler} />}
        </div>
    );
}

export default AddUser;