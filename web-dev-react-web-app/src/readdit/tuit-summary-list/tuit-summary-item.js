import React from "react";
import teslaLogo from "./images/tesla-logo.png";
import { useSelector } from "react-redux";

const TuitSummaryItem = ({
  tuit = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title: `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
    image: teslaLogo,
  },
}) => {
  const { currentUser } = useSelector((state) => state.user);
  const imageUrl = tuit.image ? require(`./images/${tuit.image}`) : teslaLogo;
  //   console.log(imageUrl);
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-10">
          <div>
            {tuit.username || currentUser.username} - {tuit.time || "2h"}
          </div>
          <div className="fw-bolder">{tuit.topic || "Newest Tuits"}</div>
          <div>{tuit.tuit}</div>
        </div>
        <div className="col-2 d-flex align-items-center">
          <img width={70} className="rounded-3" src={imageUrl} alt="hmm" />
        </div>
      </div>
    </li>
  );
};
export default TuitSummaryItem;
