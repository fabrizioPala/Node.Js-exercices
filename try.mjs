import express from 'express';
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/contatti ', (req, res) => {
  res.send('Contatti ');
});

app.get('/prodotti', (req, res) => {
  res.send('prodotti');
});

app.use((req, res) => {
  res.status(404).send('404');
});

app.listen(PORT, () => {
  console.log(`Server in funzione su  ${PORT}`);
});
