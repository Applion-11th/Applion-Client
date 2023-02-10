import React from "react";
import { useCountdown } from "../../hooks";
import { DisplayDate, DisplayTime } from "../atoms";
import styled from "styled-components";
import palette from "../../styles/colors";

const ExpiredNotice = () => {
  return (
    <Notice>
      <NoticeTitle>지원 마감되었습니다!</NoticeTitle>
      <NoticeBody>
        서강대학교 멋쟁이 사자처럼 11기에 지원해주셔서 감사합니다.
        <br />
        서류 발표는 3월 13일에 개별 문자 드리겠습니다.
      </NoticeBody>
    </Notice>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <Show>
      <DisplayDate value={days} isDanger={days <= 3} />
      <DisplayTime value={hours} isDanger={false} />:
      <DisplayTime value={minutes} isDanger={false} />:
      <DisplayTime value={seconds} isDanger={false} />
    </Show>
  );
};

export const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const total = days + hours + minutes + seconds;
  return (
    <>
      {total <= 0 ? (
        <ExpiredNotice />
      ) : (
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      )}
    </>
  );
};

const Show = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  color: white;
  font-family: Wakeup;
  font-size: 36px;
`;

const Notice = styled.div`
  text-align: left;
`;

const NoticeTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: ${palette.red};
`;

const NoticeBody = styled.p`
  font-size: 19px;
`;
