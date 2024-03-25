const express = require('express');
const router = express.Router();

// Dummy database of planets
let planets = [
  {
    id: 1,
    name: 'Earth',
  },
  {
    id: 2,
    name: 'Mars',
  },
];

// Function to get all planets
exports.getAll = (req, res) => {
  res.status(200).json(planets);
};

exports.getOneById = (req, res) => {
  const planetId = parseInt(req.params.id);
  const planet = planets.find((p) => p.id === planetId);
  if (!planet) return res.status(404).json({ error: 'Planet not found' });
  res.status(200).json(planet);
};

exports.create = (req, res) => {
  const newPlanet = {
    id: planets.length + 1,
    name: req.body.name,
  };
  planets = [...planets, newPlanet];
  res.status(201).json({ msg: 'Planet created successfully' });
};

exports.updateById = (req, res) => {
  const planetId = parseInt(req.params.id);
  const updatedName = req.body.name;
  planets = planets.map((planet) => {
    if (planet.id === planetId) {
      planet.name = updatedName;
    }
    return planet;
  });
  res.status(200).json({ msg: 'Planet updated successfully' });
};

exports.deleteById = (req, res) => {
  const planetId = parseInt(req.params.id);
  planets = planets.filter((planet) => planet.id !== planetId);
  res.status(200).json({ msg: 'Planet deleted successfully' });
};

module.exports = router;
/*IL FILE PRINCIPALE SAREBBE DUNQUE COSI :

const express = require('express');
const planetsRouter = require('./controllers/planets');

const app = express();

app.use(express.json());

app.use('/', planetsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/
