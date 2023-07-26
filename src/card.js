import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import "./styles.css";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const Template = (data) => {
  const {
    temp_c,
    temp_f,
    condition,
    wind_kph,
    humidity,
    cloud,
    last_updated
  } = data.data.current;

  return (
    <>
      <h2>{data.data.location.name}</h2>
      <Card sx={{ minWidth: 275 }} className="card">
        <CardHeader
          avatar={
            <Avatar
              src={data.data.current.condition.icon}
              aria-label="recipe"
            />
          }
          title="Weather Details"
        />
        <CardContent className="content">
          <div>
            <Typography variant="body2" color="text.secondary">
              Temperature: {temp_c}°C / {temp_f}°F
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Weather Condition: {condition.text}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Wind Speed: {wind_kph} kph
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Humidity: {humidity}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cloud Coverage: {cloud}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last Updated: {last_updated}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Template;
