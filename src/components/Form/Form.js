import React, { useState, useRef } from 'react';
import Error from '../ErrorModule/Error';

function Form(props) {
    const enteredName_ref = useRef();
    const enteredEmail_ref = useRef();
    const enteredNumber_ref = useRef();
    const [enteredName, setName] = useState("");
    const [enteredEmail, setEmail] = useState("");
    const [enteredNumber, setNum] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccessState] = useState(false);

    function submitHandler(event) {
        event.preventDefault();
        console.log(enteredName_ref.current.value);
        console.log(enteredEmail_ref.current.value);
        console.log(enteredNumber_ref.current.value);
        setSuccessState(true);
        const UserData = {
            userName: enteredName,
            userEmail: enteredEmail,
            userNum: enteredNumber
        };
        if (!enteredName) {
            setError({ title: "Name Error", message: "Enter Your Name" })
        }
        if (!enteredEmail) {
            setError({ title: "Email Error", message: "Enter Your Email" })
        }
        if (!enteredNumber && enteredNumber.length !== 10) {
            setError({ title: "Number Error", message: "Enter Your Mobile No. Properly" })
        }
        else {
            props.onSave(UserData);
        }
    }

    function nameHandler(event) {
        setName(event.target.value);
    }
    function emailHandler(event) {
        setEmail(event.target.value);
    }
    function numHandler(event) {
        setNum(event.target.value);
    }
    function ErrorHandler() {
        setError(null);
    }

    return (
        <section className="body-form" >
            <div className="container">
                {error && <Error heading={error.title} message={error.message} onConfirm={ErrorHandler}></Error>}
                <div className="pt-20 body-header">
                    <h1>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</h1>
                </div>
                <div className="">
                    {!success && <div className="card-body">
                        <form onSubmit={submitHandler}>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Enter your Name"
                                onChange={nameHandler}
                                ref={enteredName_ref}
                            />
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Enter your Email ID"
                                onChange={emailHandler}
                                ref={enteredEmail_ref}
                            />
                            <input
                                className="form-control"
                                type="tel"
                                placeholder="Enter your Phone No"
                                onChange={numHandler}
                                ref={enteredNumber_ref}
                            />
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </form>
                    </div>}
                    {success && <div className="card-body">
                        <p>Thank You for Submitting the Data</p>
                    </div>}

                </div>
                <div className="column-right">

                </div>

            </div>
        </section>
    );
}

export default Form;