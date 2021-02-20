import { useParams, Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./gethostel.css";
const GetHostel = () => {
  const params = useParams();
  const history = useHistory();
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(0);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://nearhostelapi.herokuapp.com/api/hostels/getHostel/${params.hid}
  `,

        { headers: { token: localStorage.getItem("token") } }
      );
      setData(res.data.data);
    }
    getData();
  }, []);
  const contactForms = async (e) => {
    e.preventDefault();
    const send = { name, email, mobile };
    console.log(send);
    const res = await axios.post(
      `https://nearhostelapi.herokuapp.com/api/hostels/createForm/${params.hid}
`,
      send,
      {
        headers: {
          token: localStorage.getItem("token")
        }
      }
    );

    console.log(res.data);
    if (res.data.status === "success") {
      history.push("/getForms");
    }
  };
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

      <div className="row">
        <div className="hostelimage col-lg-7">
          <img src={data.image} />
        </div>

        <div className="hosteldetails col-lg-5">
          <div className="description">
            <div className="title">
              <h3>{data.name}</h3>
            </div>
            <div className="text">
              <span id="text">{data.description}</span>
              <p>
                <span>
                  {" "}
                  City: {data.monthPrice}
                  &nbsp; &nbsp;State: {data.monthPrice}&nbsp;&nbsp;Pincode:
                  {data.pincode}
                  &nbsp;&nbsp; Address: {data.Address}
                </span>
              </p>

              <br />
            </div>
            <p>Daily Rent: {data.dayPrice}</p>
            <p>Monthly Rent: {data.monthPrice}</p>

            <br />
          </div>
          <hr />

          <div className="contact">
            <form onSubmit={contactForms}>
              <h4>Contact</h4>
              <p>Name</p>
              <input
                type="text"
                name="HostelName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter HostelName"
              />
              <p>Email</p>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email-Id"
              />
              <p>Mobile</p>
              <input
                type="number"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                placeholder="Enter Mobile number"
              />

              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetHostel;
