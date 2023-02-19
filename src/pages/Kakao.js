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
        .get(`${`https://port-0-applion-server-108dypx2ale6pqivi.sel3.cloudtype.app/api/kuser/kakao/callback/${code}`}`)
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("id", res.data.user.id);
          localStorage.setItem("position", res.data.user.position);
          setTimeout(() => {
            navigate("/info");
          }, 300);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <p>로딩 중입니다.</p>
    </div>
  );
};

export default KaKao;
