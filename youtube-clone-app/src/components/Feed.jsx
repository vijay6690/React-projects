import { Stack, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const getData = async (url) => {
    const options = {
      headers: {
        "X-RapidAPI-Key": "e226ae8492mshf05e9e8741a1c12p165f6cjsn40f680c403b3",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };
    const response = await fetch(
      `https://youtube-v31.p.rapidapi.com/search?q=${selectedCategory}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
      options
    );
    const data = await response.json();
    setVideos(data.items);
    console.log(data.items);
  };
  useEffect(() => {
    getData();
    // fetchFromAPI(
    //   `search?part=snippet&videoId=M7FIvfx5J10&q=${selectedCategory}`
    // ).then((response) => response.json());
    // .then((data) => console.log(data));
    // fetchFromAPI(
    //   `search?part=snippet&videoId=M7FIvfx5J10&q=${selectedCategory}`
    // ).then((data) => setVedios(data.items));
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "colom", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          p: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 JSM Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}
