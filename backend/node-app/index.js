const express = require('express');
const app = express();
//retorn del servidor (ruta)
app.get('/', (req, res) => {
  res.send('Hello from Node.js service!');
});
//iniciar el servidor
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Node.js server running at http://localhost:${PORT}`);
// });
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Node.js server running at http://0.0.0.0:${PORT}`);
});
