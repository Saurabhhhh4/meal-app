import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
} from "@mui/material";

function App() {
  const [meals, setMeals] = useState([]);

  // Fetch data from TheMealDB API
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => {
        setMeals(response.data.meals); // Save meals in state
      })
      .catch((error) => {
        console.error("Error fetching meals:", error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        🍤 Seafood Meals
      </Typography>

      <Grid container spacing={3}>
        {meals.map((meal) => (
          <Grid item xs={12} sm={6} md={4} key={meal.idMeal}>
            <Card>
              {/* Meal Image */}
              <CardMedia
                component="img"
                alt={meal.strMeal}
                height="200"
                image={meal.strMealThumb}
              />

              <CardContent>
                {/* Meal Name */}
                <Typography variant="h6">{meal.strMeal}</Typography>
                {/* Meal ID */}
                <Typography variant="body2" color="textSecondary">
                  ID: {meal.idMeal}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
