import "./forget.scss";
import { Button } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { login } from "../../App";

const Forget = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  return (
    <div className="login">
      <Navbar />

      <div className="inner">
        <div className="innerDiv1">
          <section>
            Let’s Begin Your <br /> New <span>Journey</span>{" "}
          </section>
        </div>

        <div className="innerDiv2">
          <div className="logHead">Forget Password</div>

          <select className="language-selector" defaultValue="en">
            <option value="tr">TR</option>
            <option value="en">English (uk)</option>
            <option value="de">DE</option>
          </select>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="input"
                id="email"
                name="email"
                placeholder="Email"
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-group">
              <Button variant="contained" className="bt1">
                Send an Email to Reset Password
              </Button>
            </div>
            <div className="form-group">
              <Button
                variant="contained"
                className="bt2"
                onClick={() => navigate(login)}
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forget;
