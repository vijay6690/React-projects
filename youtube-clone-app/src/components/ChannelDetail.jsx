import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export default function ChannelDetail() {
  const [channelDetails, setChannelDetail] = useState(null);
  const { id } = useParams();
  // console.log(channelDetails);
  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((res) =>
      console.log(res.json())
    );

    // setChannelDetail(fetchFromAPI(`channels?part=snippet&id=${id}`));
    // .then((response) => response.json())
    // .then((data) => console.log(data.item))
  }, [id]);
  return <div>{id}</div>;
}
