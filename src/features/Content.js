import React from "react";

import { StoreContext } from "../context/store";

import styles from "./Content.module.css";

export function Content() {
  console.log("Content Renders");

  const { loadingDispatch } = React.useContext(StoreContext);

  return (
    <div className={styles.row}>
      <button
        className={styles.button}
        aria-label="On"
        onClick={() => {
          loadingDispatch("on");
          setTimeout(() => {
            loadingDispatch("off");
          }, 2000);
        }}
      >
        Send request
      </button>

      <button
        className={styles.button}
        aria-label="Off"
        onClick={() => loadingDispatch("off")}
      >
        Cancel request
      </button>
    </div>
  );
}
