import "./Main.css";
import { useHistory } from "react-router-dom";
const Seach = ({ data }) => {
  const history = useHistory();
  const gotoD = (e, id) => {
    e.preventDefault();
    history.push({
      pathname: `/hostel/${id}`
    });
  };
  return (
    <>
      <div class="hostels">
        <div class="container-fluid">
          {data.map((e) => {
            return (
              <div class="hostel" key={e._id}>
                <div class="hostel-image">
                  <img src={e.image} />
                </div>
                <div class="description">
                  <div class="title">{e.name}</div>
                  <div class="text">
                    <p>{e.description}</p>

                    <br />

                    <button
                      type="button"
                      class="btn btn-primary btn-sm s"
                      onClick={(el) => gotoD(el, e._id)}
                    >
                      Go to
                    </button>
                  </div>
                  <br />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Seach;
