import { CheckCircle } from "@mui/icons-material";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  // ChackCircle,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";

export default function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  // console.log(videoId, snippet);
  return (
    <Card
      sx={{
        width: { md: "300px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {snippet?.thumbnails?.high?.url ? (
          <CardMedia
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
            sx={{ width: 358, height: 180 }}
          />
        ) : (
          <CardMedia image={demoThumbnailUrl} />
          // <image src={demoThumbnailUrl} />
        )}
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId ? `/channel/${snippet?.channelId}` : demoVideoUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="grey">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "grey", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
