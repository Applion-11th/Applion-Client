import { useEffect, useState } from "react";

export const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();
  // new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date(new Date().setHours(0, 0, 0, 0)).getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  //남은시간 계산
  let days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  //00:00:00 으로 나오도록
  if (hours.toString().length === 1) hours = "0" + hours;
  if (minutes.toString().length === 1) minutes = "0" + minutes;
  if (seconds.toString().length === 1) seconds = "0" + seconds;

  return [days, hours, minutes, seconds];
};
