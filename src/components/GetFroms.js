import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./HostelList.css";
import axios from "axios";
const GetForms = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://nearhostelapi.herokuapp.com/api/hostels/showAllForms
    `,
        {
          headers: { token: localStorage.getItem("token") }
        }
      );

      setData(res.data.data);
    }
    getData();
  });

  return (
    <>
      <header>
        <div className="container-fluid">
          <Link to="/search">
            <h5>
              QuickFind<span id="#">HOSTEL</span>
            </h5>
          </Link>
        </div>
      </header>

      <table class="table table-danger">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <tr key={e._id}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default GetForms;
