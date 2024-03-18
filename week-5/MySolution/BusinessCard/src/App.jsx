import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import { SocialMedia } from "./components/social_media";

function App() {
  const [alldata, setAlldata] = useState([
    {
      Name: "Harshad",
      Description: "My Name is Harshad",
      Interests: ["Playing Cricket", "Styuding", "Programming"],
      twitter: "https://twitter.com/?lang=en",
      Linkedn: "https://www.linkedin.com/in/harshad-khandare-32532719b/",
    },
    {
      Name: "Harshad",
      Description: "My Name is Harshad",
      Interests: ["Playing Cricket", "Styuding", "Programming"],
      twitter: "https://twitter.com/?lang=en",
      Linkedn: "https://www.linkedin.com/in/harshad-khandare-32532719b/",
    },
  ]);
  return (
    <div style={{}}>
      {alldata.map((all) => {
        return (
          <Card color={"success"} sx={{ width: 320, margin: "0 10px 20px 0" }}>
            <div>{all.Name}</div>
            <div>{all.Description}</div>
            {all.Interests.map((interest) => {
              return <li>{interest}</li>;
            })}

            <SocialMedia
              linkedn={all.Linkedn}
              twitter={all.twitter}
            ></SocialMedia>
            {/* <SocialMedia></SocialMedia> */}
          </Card>
        );
      })}
    </div>
  );
}

export default App;
