import React from "react";

import { StoreContext } from "../context/store";

import styles from "./Content.module.css";

export function LoadingBar() {
  console.log("LoadingBar Renders");

  const { loadingState } = React.useContext(StoreContext);

  return (
    <span className={styles.value}>
      {`IS ${loadingState ? "" : "NOT "}LOADING`}
    </span>
  );
}
