const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello from ArtistDiary !');
  console.log("res",res);
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
