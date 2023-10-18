import axios from "axios";
import { Fragment, useEffect, useState } from "react";
// import { Col } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";


const Update = () => {
    const [values, setvalues] = useState(
        {
            name: "",
            email: "",
            phone: ""
        }
    )

    // De-structuring the object properties
    // const { name, email, phone } = values;

    // useparams to see and update the particicular user data
    const { id } = useParams()
    useEffect(() => {
        axios.get("http://localhost:3000/users/" + id)
            .then(res => setvalues(res.data))
            .catch(err => console.error(err))
    }, [])


    // useonchage event for change the input values
    const onchageHandler = (e) => {
        setvalues({ ...values, [e.target.name]: e.target.value })
    }



    // usenavigate to see the updated details in all user details in Home.js
    const navigate = useNavigate()


    // useonsubmit event for form submit
    const onsubmitHandler = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3000/users/" + id,values)
            .then(res => {
                setvalues(res.data);
                navigate('/')
            }).catch(err => console.error(err))
    }
    return (

        <Fragment>
            <div className="d-flex justify-content-center align-items-center vh-100">

                <div className=" w-50 bg-light rounded border shadow p-4">
                    <h2 className="text-center">Update user Details</h2><br />
                    <form onSubmit={onsubmitHandler}>
                        <label className="form-label">Name:</label>
                        <input type="text" className="form-control" placeholder="enter your name" name="name" value={values.name} onChange={onchageHandler} /><br />
                        <label className="form-label">Email:</label>
                        <input type="email" className="form-control" placeholder="enter your email" name="email" value={values.email} onChange={onchageHandler} /><br />
                        <label className="form-label">phone:</label>
                        <input type="text" className="form-control" placeholder="enter your phone number" name="phone" value={values.phone} onChange={onchageHandler} /><br />

                        <button className="btn btn-success mx-1" >submit</button>
                        <Link to="/"><button className="btn btn-primary mx-1">back</button></Link>
                    </form>
                </div>
            </div>
        </Fragment>

    )
};

export default Update;