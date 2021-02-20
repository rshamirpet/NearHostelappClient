import Search from "./Search";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
const Main = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/login");
    }
    async function getData() {
      const res = await axios.get(
        ` https://nearhostelapi.herokuapp.com/api/hostels/getAllHostels
      `,
        {
          headers: {
            token: localStorage.getItem("token")
          }
        }
      );

      if (res.data.status === "success") {
        setData(res.data.data);
      }
    }
    getData();
  }, []);
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push("/login");
  };
  return (
    <>
      <header>
        <div className="container-fluid group">
          <Link to="/search">
            <h5>
              QuickFind<span>HOSTEL</span>
            </h5>
          </Link>
          <input id="box" type="text" placeholder="Search" />

          <nav className="nav group">
            <ul>
              <li>
                <label>price</label>
                <select name="amount">
                  <option value="price"></option>
                  <option value="price">Low</option>
                  <option value="price">High</option>
                  <option value="price">Low to high</option>
                  <option value="price">High to Low</option>
                </select>
              </li>

              <li>
                <button type="button" className="btn btn-primary btn-sm">
                  Search
                </button>
              </li>

              {localStorage.getItem("role") === "user" ? (
                <>
                  <li>
                    <Link to="/becomeHostelOwner">
                      <button type="button" className="btn btn-primary btn-sm">
                        Become a Hostel Owner
                      </button>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/getForms">
                      <button type="button" className="btn btn-primary btn-sm">
                        Get All Forms
                      </button>
                    </Link>
                  </li>
                </>
              )}

              <li>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Search data={data} />
    </>
  );
};

export default Main;
