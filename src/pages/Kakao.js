import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/atoms";

const KaKao = () => {
  const navigate = useNavigate();
  const href = window.location.href;
  const [loading, setLoading] = useState(null);
  let params = new URL(href).searchParams;

  let code = params.get("code");

  useEffect(() => {
    if (code) {
      axios
        .get(`${`https://port-0-applion-server-108dypx2ale6pqivi.sel3.cloudtype.app/api/kuser/kakao/callback/${code}`}`)
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("id", res.data.user.id);
          localStorage.setItem("position", res.data.user.position);
          setLoading(true);
          setTimeout(() => {
            setLoading(true);
            navigate("/info");
          }, 300);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return (
    <>
      {loading && <Loading />}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {loading && <Loading />}
        </div>
    </>
  );
};

export default KaKao;
