import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
  const countDownDate = new Date('2023-03-10T23:59:59')
// new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
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
  let hours = 

    Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((countDown % (1000 * 60)) / 1000);

//00:00:00 형식으로 나오도록
hours =  hours < 10 ? `0${hours}` : hours;
minutes = minutes < 10 ? `0${minutes}` : minutes;
seconds = seconds < 10 ? `0${seconds}` : seconds;

  return [days, hours, minutes, seconds];
};

export { useCountdown };
