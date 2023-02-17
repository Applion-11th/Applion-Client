import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const KaKao = () => {
  const navigate = useNavigate();
  const href = window.location.href;
  let params = new URL(href).searchParams;

  let code = params.get("code");

  useEffect(() => {
    if (code) {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}`, {
          code: code,
        })
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    navigate("/info");
  });

  return (
    <div>
      <p>안녕</p>
    </div>
  );
};

export default KaKao;
