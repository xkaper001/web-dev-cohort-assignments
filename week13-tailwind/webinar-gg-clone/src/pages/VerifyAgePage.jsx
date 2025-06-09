import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import "../index.css";

export const VerifyAgePage = () => {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setDisabled(value.trim() === "");
  };

  const handleContinue = () => {
    // Navigate to the get-started page
    if (!disabled) {
      navigate("/get-started");
    }
  };

  return (
    <>
      <div className="text-3xl">
        <span className="text-cyan">Webinar</span>
        .gg
      </div>
      <div className="text-3xl font-semibold py-12">Verify Your Age</div>
      <div className="text-grey">
        Please confirm your birth year. This data will not be stored.
      </div>
      <br />
      <Input
        type={"text"}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={"Your Birth Year"}
      />
      <br />
      <Button disabled={disabled} onClick={handleContinue}>
        Continue
      </Button>
    </>
  );
};
