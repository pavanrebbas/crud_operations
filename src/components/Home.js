import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Col, Container, Row } from "react-bootstrap";

const Home = () => {

    const [data, setdata] = useState([])

    useEffect(() => {
        /* axios.get("http://localhost:3000/users")
            .then(res => console.log(res.data))
            .catch(err => console.error(err)) */
        getdata();
    }, [])

    const getdata = async () => {

        axios.get("http://localhost:3000/users")
            .then(res => setdata(res.data))
            .catch(err => console.error(err))
    }

    // usenavigate for delete the user
    const navigate = useNavigate()

    // Detlet the user form list
    const ondeleteHandler = (id) => {
        const deleteconfirm = window.confirm("if you delet the user details?")
        if (deleteconfirm) {
            axios.delete("http://localhost:3000/users/" + id)
                .then(res => {
                    // navigate('/')
                    location.reload()
                }).catch(err => console.error(err))
        }
    }

    return (
        <Fragment>
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h1>List of users</h1>
                <div className="w-75 rounded bg-light shadow p-4">
                    <Link to="/create">  <button className="btn btn-success">
                        Add +
                    </button></Link>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.map((user) => {
                                    return (
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>
                                                <Link to={"/read/" + user.id}><button className="btn btn-warning mx-1">Read</button></Link>
                                                <Link to={"/update/" + user.id}><button className="btn btn-primary mx-1">update</button></Link>
                                                <button className="btn btn-success mx-1" onClick={e => ondeleteHandler(user.id)}>Delete</button>
                                            </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </Fragment>
    )
};

export default Home;