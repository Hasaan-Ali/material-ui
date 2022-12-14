import {
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import React from "react";

const Lesson18 = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9IOtuKbqeQuHnitHq8arbEe8QvQQJIsRAi2s8-sHjul4A2uZXliHDp_Ol8IDUp8RL3AE&usqp=CAU"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, esse
            ducimus fuga sed laboriosam laborum culpa ipsum quas, similique illo
            vero praesentium, provident rerum. Deserunt aut repudiandae cum
            consequuntur dolor.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Lesson18;
