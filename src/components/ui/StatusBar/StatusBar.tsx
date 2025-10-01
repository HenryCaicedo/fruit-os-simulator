import React, { useEffect, useState } from "react";
import { Signal, Battery, Wifi } from "lucide-react";
import "./StatusBar.css";

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${paddedMinutes} ${ampm}`;
}

export default function StatusBar() {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="status-bar status-bar-height">
      <span className="carrier">
        {/*
        <Signal size={16} style={{ verticalAlign: "middle", marginRight: 4 }} />
        */}
        No Service
        <Wifi size={16} style={{ verticalAlign: "middle", marginRight: 4 }} />
      </span>
      <span className="time">
        {time}
      </span>
      <span className="battery">
        {`${Math.round(
          ((24 * 60 - (new Date().getHours() * 60 + new Date().getMinutes())) / (24 * 60)) * 100
        )}%`}
        <Battery size={24} style={{ verticalAlign: "middle", marginRight: 4 }} />
      </span>
    </div>
  );
}
