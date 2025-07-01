---
title: "Building a Weather App with React and OpenWeatherMap API"
date: "2024-11-12"
tags: ["React", "API", "Frontend", "JavaScript"]
description: "Learn how to build a weather app using React and fetch live data from OpenWeatherMap."
---

## Overview

In this project, I created a responsive weather application using **React**. The app fetches real-time weather data using the **OpenWeatherMap API**.

## Features

- City-based weather search
- Temperature, humidity, and wind details
- Responsive layout for mobile and desktop

## Key Tools

- React (CRA)
- Axios
- OpenWeatherMap API
- TailwindCSS

## Code Snippet

```jsx
useEffect(() => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(res => setWeather(res.data))
    .catch(err => console.error(err));
}, [city]);