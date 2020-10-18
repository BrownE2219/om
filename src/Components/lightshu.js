import React, { useState, useEffect } from "react";
import UserService from "./../services/UserService";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const zoomMeeting = document.getElementById("zmmtg-root");

export default function Login() {
  zoomMeeting.style.display = "none";
  zoomMeeting.style.height = "0px";
  zoomMeeting.style.width = "0px";
  zoomMeeting.style.position = "relative";
  zoomMeeting.style.backgroundColor = "black";
  zoomMeeting.style.zIndex = 1000;
  const [data, setData] = React.useState({
    Phone_number: "",
    otp: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidotp: true,
    password: null,
    radio_props: [],
  });
  const [OTPsent, updateOTPSent] = useState(false);
  const [seconds, decreaseSeconds] = useState(59);
  const [OTPresend, updateOTPresend] = useState(false);
  const [isLoading, updateIsLoading] = useState(false);
  const [selectedUser, updateSelectedUser] = useState(null);
  const [isMultiAccount, updateIsMultiAccount] = useState(false);
  const [Passwordsent, updatePasswordSent] = useState(false);
  const history = useHistory();

  useEffect(() => {
    let details = JSON.parse(localStorage.getItem("foundUser"));
    if (details) {
      history.push("/Home");
    }
  }, []);

  const textInputChange = (val) => {
    console.log("otp : ", val.target.value);
    setData({
      ...data,
      Phone_number: val.target.value,
      check_textInputChange: true,
      isValidUser: true,
    });
  };

  const handleotpChange = (val) => {
    setData({
      ...data,
      otp: val.target.value,
      isValidotp: true,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val && val.length >= 10) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const sendOTP = (e, Phone_number) => {
    e.preventDefault();
    updateIsLoading(true);
    if (data && data.Phone_number.length == 0) {
      return (
        <Alert severity="error">This is an error alert — check it out!</Alert>
      );
    } else {
      updateOTPresend(false);
      decreaseSeconds(59);

      var asiaTime = new Date().toLocaleString("en-US", {
        timeZone: "Indian/Christmas",
      });
      let Ctime = new Date(asiaTime).toISOString().split("T");
      let CTDate = Ctime[0];

      var a = new Date().toString();
      var CTtime = a.split(" ")[4];

      UserService.getOTP(Phone_number, CTDate, CTtime)
        .then((res) => {
          if (res.data.responseCode == 200) {
            updateIsLoading(false);
            updateOTPSent(true);
            updateIsMultiAccount(false);
            timerStart();
          } else if (res.data.responseCode == 201) {
            updateIsLoading(false);
            updateIsMultiAccount(false);
            updatePasswordSent(true);
            timerStart();
          } else if (res.data.responseCode == 214) {
            updateIsMultiAccount(false);
            updateIsLoading(false);
            alert(res.data.data.messageDescription);
            timerStart();
          } else if (res.data.responseCode == 215) {
            updateIsLoading(false);
            setData({ ...data, radio_props: res.data.data.entities });
            updateIsMultiAccount(true);
            timerStart();
          } else if (res.data.responseCode == 500) {
            alert(
              res.data && res.data.data && res.data.data.messageDescription
            );
          }
        })
        .catch((err) => {
          updateIsLoading(false);
          console.log(err);
        });
    }
  };

  const verifyOTP = (e, mob, otp) => {
    e.preventDefault();
    updateIsLoading(true);
    let service;
    if (Passwordsent) {
      service = UserService.VerifyPassword(data.Phone_number, data.password);
    } else {
      service = UserService.verifyOTP(data.Phone_number, otp);
    }
    service.then((res) => {
      if (res.data.responseCode == 200) {
        let foundUser = res.data && res.data.data;
        localStorage.setItem("foundUser", JSON.stringify(foundUser));
        updateIsLoading(false);
        updateOTPSent(false);
        history.push("Home");
      } else if (res.data.responseCode == 500) {
        alert(res.data && res.data.data && res.data.data.messageDescription);
      }
    });
  };

  const timerStart = () => {
    const interval = setInterval(() => {
      if (seconds >= 0) {
        decreaseSeconds((seconds) => seconds - 1);
      }
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      updateOTPresend(true);
    }, 59000);
  };

  const editMobile = () => {
    updateOTPSent(false);
  };

  const handlePassowrdChange = (val) => {
    console.log("password : ", val.target.value);
    setData({
      ...data,
      password: val.target.value,
    });
  };

  const GoingToSelectUser = (e) => {
    let user = e.target.value;
    let usr = data.radio_props.findIndex((data) => {
      return user == data.entity_name;
    });

    let userArray = data.radio_props.filter((data) => {
      return user == data.entity_name;
    });

    userArray = userArray[0];

    console.log("userrrrrrrrrr : ", userArray);

    if (!data.radio_props[usr].selected) {
      userArray["selected"] = true;
    } else {
      for (let i = 0; i < data.radio_props.length; i++) {
        if (usr != i) {
          userArray["selected"] = false;
        }
      }
    }

    data.radio_props[usr] = userArray;
    let dt = data.radio_props;
    setData({ ...data, radio_props: dt });
    updateSelectedUser(userArray);
  };

  const generateOTPbyUserId = (e) => {
    e.preventDefault();
    let deviceUniqueId = "web";
    UserService.generateOTPbyUserId(selectedUser, deviceUniqueId)
      .then((res) => {
        if (res.data.responseCode == 200) {
          updateIsLoading(false);
          updateOTPSent(true);
          updateIsMultiAccount(false);
        } else if (res.data.responseCode == 201) {
          updateIsLoading(false);
          updateIsMultiAccount(false);
          updatePasswordSent(true);
          timerStart();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign In</h3>
          {!OTPsent && !Passwordsent && !isMultiAccount && (
            <div className="form-group">
              <label>Mobile No</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Mobile No"
                value={data.Phone_number}
                onChange={(val) => textInputChange(val)}
              />
            </div>
          )}
          {OTPsent && !isMultiAccount && !Passwordsent && (
            <div className="form-group">
              <label>OTP</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter OTP"
                value={data.otp}
                onChange={(val) => handleotpChange(val)}
              />
            </div>
          )}
          {!OTPsent && !isMultiAccount && Passwordsent && (
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Password"
                value={data.password}
                onChange={(val) => handlePassowrdChange(val)}
              />
            </div>
          )}

          {isMultiAccount && (
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="gender"
                name="gender1"
                // value={value}
                onChange={GoingToSelectUser}
              >
                {data.radio_props.map((item, i) => (
                  <FormControlLabel
                    value={item.entity_name}
                    control={<Radio />}
                    label={item.entity_name}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          )}

          <div className="form-group">
            <div className="custom-control custom-checkbox"></div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={(e) => {
              !isMultiAccount
                ? !OTPsent && !Passwordsent
                  ? sendOTP(e, data.Phone_number)
                  : verifyOTP(e, data.Phone_number, data.otp)
                : generateOTPbyUserId(e);
            }}
          >
            {" "}
            {!OTPsent && !Passwordsent && "Send OTP      "}
            {OTPsent && !Passwordsent && "Verify OTP    "}
            {Passwordsent && "Login  "}
          </button>
        </form>
        {OTPsent && (
          <div
            className="resendotp"
            onClick={(e) => sendOTP(e, data.Phone_number)}
          >
            Did'nt get Otp ? Resend Again.
          </div>
        )}
      </div>
    </div>
  );
}
