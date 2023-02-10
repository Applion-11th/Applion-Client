import React from "react";
import TimeDisplay from "./TimeDisplay";
import DateDisplay from "./DateDisplay";
import { useCountdown } from "../../hooks";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <div>지원 마감되었습니다!</div>
      <p>서강대학교 멋쟁이 사자처럼 11기에 지원해주셔서 감사합니다.</p>
      <p>서류 발표는 00월 00일에 개별 문자 드리겠습니다.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a rel="noopener noreferrer" className="countdown-link">
        <div id="dday">D -</div>
        {/* type={'Hours'} type={'Mins'}  type={'Seconds'}  */}
        <DateDisplay id="dday" value={days} isDanger={days <= 3} />
        <TimeDisplay value={hours} isDanger={false} />
        <div className="timer">:</div>
        <TimeDisplay value={minutes} isDanger={false} />
        <div className="timer">:</div>
        <TimeDisplay value={seconds} isDanger={false} />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
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

export default CountdownTimer;
