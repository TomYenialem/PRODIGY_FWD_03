import React from "react";
import Back from "../Background/Back";
import Main from "../Main/Main";
import Fourth from "../Fourth/Fourth";
import Blog from "../Blog/Blog";
import First from "../First/First";
import Third from "../Third/Third";

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
