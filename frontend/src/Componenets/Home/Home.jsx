import React from "react";
import Back from "../Home/Background/Back";
import Main from "../Home/Main/Main";
import Fourth from "../Home/Fourth/Fourth";
import Blog from "../Home/Blog/Blog";
import First from "../Home/First/First";
import Third from "../Home/Third/Third";

export default function Home() {
  return (
    <div>
      <Back />
      <First />
      <Main />
      <Third />
      <Fourth />
      <Blog />
    </div>
  );
}
