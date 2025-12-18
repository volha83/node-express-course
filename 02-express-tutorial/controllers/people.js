const { people } = require("../data");

const getPeople = (req, res) => {
  res.json(people);
};

const addPerson = (req, res) => {
  if (!req.body.name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a name" });
  }
  people.push({ id: people.length + 1, name: req.body.name });
  return res.status(201).json({
    success: true,
    name: req.body.name,
  });
};

const getPerson = (req, res) => {
  const personId = parseInt(req.params.id);
  const person = people.find((p) => p.id === personId);

  if (!person) {
    return res.status(404).json({ message: "Person not found" });
  }
  return res.status(200).json(person);
};

const updatePerson = (req, res) => {
  const personId = parseInt(req.params.id);
  const person = people.find((p) => p.id === personId);

  if (!person) {
    return res.status(404).json({ message: "Person not found" });
  }

  if (!req.body.name) {
    return res.status(400).json({ success: false, message: "Enter a name" });
  }
  person.name = req.body.name;
  return res.status(200).json({ success: true, person });
};

const deletePerson = (req, res) => {
  const personId = parseInt(req.params.id);
  const person = people.find((p) => p.id === personId);

  if (!person) {
    return res.status(404).json({ message: "Person not found" });
  }

  const index = people.findIndex((p) => p.id === personId);
  people.splice(index, 1);
  return res.status(200).json({ success: true, date: people });
};

module.exports = {
  addPerson,
  getPeople,
  getPerson,
  updatePerson,
  deletePerson,
};
