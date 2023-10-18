import axios from "axios";
import { Fragment, useEffect, useState } from "react";
// import { Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";


const Read = () => {

    const [data, setdata] = useState([])

    // useparams to see the parcicular user data with the (Id)
    const { id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:3000/users/" + id)
            .then(res => setdata(res.data))
            .catch(err => console.error(err))
    })
    return (

        <Fragment>
            <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
                <h2>user Details</h2>
                <div className="w-50 bg-light rounded border  shadow p-4 ">

                    <div>
                        <h5>Name :- <span className="fw-light"> {data.name} </span></h5>
                    </div>
                    <div>
                        <h5>Email :- <span className="fw-light" > {data.email} </span></h5>
                    </div>
                    <div>
                        <h5>Phone :- <span className="fw-light" > {data.phone} </span></h5>
                    </div><br />

                    <Link to={"/update/" + id}><button className="btn btn-primary mx-1">Edit</button></Link>
                    <Link to="/"><button className="btn btn-danger mx-1">Back</button></Link>
                </div>
            </div>
        </Fragment>

    )
};

export default Read;