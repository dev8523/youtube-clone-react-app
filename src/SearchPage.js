import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import TuneIcon from "@material-ui/icons/Tune";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://picsum.photos/200/300"
        channel="Debasish Sahoo"
        verified
        subs="2M"
        noOfViedos={382}
        description="So, How you doing! If you love programming then have a daily routine of building the apps by your own with you own skill set that you have. If you don't have one then also fine start building them, meanwhile you can learn the stack."
      />
      <hr />
      <VideoRow
        views="3.6M"
        subs="659K"
        description="Do you want a Free one hour training on React... checkout the React tutorials"
        timestamp="59 seconds ago"
        channel="Debasish Sahoo"
        title="Let's Build a YouTube clone with React JS for Enterprise Application usage"
        image="https://picsum.photos/200"
      />
      <VideoRow
        views="3.6M"
        subs="659K"
        description="Do you want a Free one hour training on React... checkout the React tutorials"
        timestamp="59 seconds ago"
        channel="Debasish Sahoo"
        title="Let's Build a YouTube clone with React JS for Enterprise Application usage"
        image="https://picsum.photos/seed/picsum/200/300"
      />
      <VideoRow
        views="3.6M"
        subs="659K"
        description="Do you want a Free one hour training on React... checkout the React tutorials"
        timestamp="59 seconds ago"
        channel="Debasish Sahoo"
        title="Let's Build a YouTube clone with React JS for Enterprise Application usage"
        image="https://picsum.photos/200/300?grayscale"
      />
      <VideoRow
        views="3.6M"
        subs="659K"
        description="Do you want a Free one hour training on React... checkout the React tutorials"
        timestamp="59 seconds ago"
        channel="Debasish Sahoo"
        title="Let's Build a YouTube clone with React JS for Enterprise Application usage"
        image="https://picsum.photos/200/300/?blur"
      />
      <VideoRow
        views="3.6M"
        subs="659K"
        description="Do you want a Free one hour training on React... checkout the React tutorials"
        timestamp="59 seconds ago"
        channel="Debasish Sahoo"
        title="Let's Build a YouTube clone with React JS for Enterprise Application usage"
        image="https://picsum.photos/200/300.jpg"
      />
    </div>
  );
}

export default SearchPage;
