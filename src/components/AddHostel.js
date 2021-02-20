import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import storage from "./firebase";
import "./Register.css";

const AddHostel = () => {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/login");
    }
    if (!localStorage.getItem("role") === "owner") {
      history.push("/search");
    }
  }, []);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dayPrice, setDayPrice] = useState(0);
  const [monthPrice, setMonthPrice] = useState(0);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState(500018);
  const [Address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState("");
  const fileUpload = (e) => {
    e.preventDefault();

    const image = e.target.files[0];
    const uploadTask = storage.ref(`files/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        // Error function ...
        console.log(error);
      },

      () => {
        // complete function ...
        storage
          .ref("files")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setImage(url);
          });
      }
    );
  };
  const register = async (e) => {
    e.preventDefault();
    setError("");

    const send = {
      name,
      description,

      dayPrice,
      monthPrice,
      city,
      state,
      pincode,
      Address,
      image
    };

    try {
      const token = localStorage.getItem("token");
      const message = await axios.post(
        "https://nearhostelapi.herokuapp.com/api/hostels/addHostel",
        send,
        {
          headers: { token: token }
        }
      );
      //message.data our sending data
      // console.log(message.data);

      if (message.data.status === "success") {
        localStorage.setItem("role", "owner");
        history.push("/login");
      } else {
        setError(message.data.message);
      }
    } catch (err) {
      setError("Use Correct Credientils to Signup");
    }
  };
  return (
    <div className="containerLogin">
      <div className="signupbox">
        <h3>Become a Hostel Owner</h3>
        <h4>{error}</h4>
        <form onSubmit={register}>
          <p>Name</p>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Enter Name of Hostel"
          />
          <p>Description</p>
          <textarea
            rows="4"
            cols="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <p>Day Price</p>
          <input
            type="number"
            required
            value={dayPrice}
            onChange={(e) => setDayPrice(e.target.value)}
            name="dayPrice"
            placeholder="Day Price"
          />
          <p>Month Price</p>
          <input
            type="number"
            name="monthPrice"
            required
            value={monthPrice}
            onChange={(e) => setMonthPrice(e.target.value)}
            placeholder="Month Price"
          />
          <br />
          <p>City</p>
          <input
            type="text"
            name="city"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="city name"
          />
          <br />

          <p>State</p>
          <input
            type="text"
            name="state"
            required
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="State name"
          />
          <br />

          <p>Pincode</p>
          <input
            type="text"
            name="pincode"
            required
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="State name"
          />
          <br />
          <p>Address</p>
          <input
            type="text"
            name="Address"
            required
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="State name"
          />
          <br />
          <br />
          <div className="form-outline mb-4">
            <label className="form-label bg-primary">Upload Resume</label>
            <input
              type="file"
              className="form-control"
              onChange={fileUpload}
              id="customFile"
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Become Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHostel;
