import React from "react";

import { LoadingBar } from "./LoadingBar";
import { Content } from "./Content";

export function Page() {
  console.log("Page Renders");

  return (
    <>
      <LoadingBar />
      <Content />
    </>
  );
}
