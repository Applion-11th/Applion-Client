import React from "react";

import styled from "styled-components";

const textList = [
  "개인정보 동의서",
  "  Ⅰ. 개인정보의 수집 및 이용 동의서 - 이용자가 제공한 모든 정보는 다음의 목적을 위해 활용하며, 하기 목적 이외의 용도로는 사용되지 않습니다.",
  "① 개인정보 수집 항목 및 수집·이용 목적",
  "  가) 수집 항목 (필수항목) - 성명(국문), 전화번호(휴대전화), 이메일, 재학정보 등 지원 신청서에 기재된 정보 또는 신청자가 제공한 정보",
  " 나) 수집 및 이용 목적 - 멋쟁이사자처럼 서강대학교 선발 진행 - 멋쟁이사자처럼 서강대학교 지원자와의 연락 및 자격확인",
  "② 개인정보 보유 및 이용기간 - 수집·이용 동의일로부터 개인정보의 수집·이용목적을 달성할 때까지",
  "        ③ 동의거부관리 - 귀하께서는 본 안내에 따른 개인정보 수집, 이용에 대하여 동의를 거부하실 권리가 있습니다. 다만, 귀하가 개인정보의 수집/이용에 동의를 거부하시는 경우에 선발 과정에 있어 불이익이 발생할 수 있음을 알려드립니다.",
];

const Modal = ({ isMount, onClick }) => {
  return (
    <>
      {isMount ? (
        <StyledModal>
          <div style={{ width: "100%", textAlign: "right", cursor: "pointer" }} onClick={onClick}>
            <span>x</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {textList.map((el, idx) => (
              <span key={idx} style={{ marginTop: "10px" }}>
                {el}
              </span>
            ))}
          </div>
        </StyledModal>
      ) : (
        ""
      )}
    </>
  );
};

const StyledModal = styled.div`
  padding: 30px;
  position: absolute;
  width: 400px;
  overflow: hidden;

  top: 0px;
  background-color: black;
`;

export default Modal;
