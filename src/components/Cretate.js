import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { Col } from "react-bootstrap";


const Create = () => {

    const [user, setuser] = useState(
        {
            name: "",
            email: "",
            phone: ""
        }
    )

    // DE-STRUCTURING THE OBJECT PROPERTIES
    const { name, email, phone } = user;

    const onchageHandler = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    // Usenavigate for add the new user in home.js with all users data
    const navigate = useNavigate()

    // Create submit evnet for form
    const onsubmitHandler = (e) => {
        e.preventDefault();
        if (name != "" && email != "" && phone != "") { // ante usename , mail,passowrd fill chestheney form submit kavali ani 30 line meaning
            axios.post("http://localhost:3000/users", user)
                .then(res => {
                    console.log(res)
                    navigate('/')
                })
                .catch(err => console.error(err))
        }

    }
    return (

        <Fragment>
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                <h2>Add user</h2>
                <div className="w-50 bg-light rounded border shadow p-4">
                    <form onSubmit={onsubmitHandler}>
                        <label>Name:</label>
                        <input type="text" className="form-control" name="name" value={name} onChange={onchageHandler} />
                        {name.length == "" ? <p className="text-danger">Please enter username</p> : name.length <= 5 ? <p className="text-danger">username should be above 5 charcters</p> : ""}
                        <br />
                        <label>Email:</label>
                        <input type="email" className="form-control" name="email" value={email} onChange={onchageHandler} />
                        {email == "" ? <p className="text-danger">Please enter email</p> : ""}
                        <br />
                        <label>Phn:</label>
                        <input type="number" className="form-control" name="phone" value={phone} onChange={onchageHandler} />
                        {phone == "" ? <p className="text-danger">Please enter phone number</p> : ""}
                        <br />
                        <button className="btn btn-success mx-1">
                            submit
                        </button>
                        <button className="btn btn-secondary mx-1">
                            <Link to="/" className="text-light text-decoration-none">Back</Link>
                        </button>
                    </form>
                </div>

            </div>
        </Fragment>
    )
};

export default Create;