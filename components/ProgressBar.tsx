"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/styles/Main.module.css";

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(progress + 10);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.loadingContainer}>
      <div
        className={styles.loadingBar}
        style={{ width: progress + "%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
