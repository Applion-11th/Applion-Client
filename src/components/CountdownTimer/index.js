import React from "react";
import { useCountdown } from "../../hooks";
import { DisplayDate, DisplayTime } from "../atoms";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <div>지원 마감되었습니다!</div>
      <p>서강대학교 멋쟁이 사자처럼 11기에 지원해주셔서 감사합니다.</p>
      <p>서류 발표는 3월 13일에 개별 문자 드리겠습니다.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a rel="noopener noreferrer" className="countdown-link">
        <DisplayDate value={days} isDanger={days <= 3} />
        <DisplayTime value={hours} isDanger={false} />
        <div className="timer">:</div>
        <DisplayTime value={minutes} isDanger={false} />
        <div className="timer">:</div>
        <DisplayTime value={seconds} isDanger={false} />
      </a>
    </div>
  );
};

export const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
