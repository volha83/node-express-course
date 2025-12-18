const express = require("express");
const router = express.Router();

// const { people } = require("../data");
const {
  addPerson,
  getPeople,
  getPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

router.get("/", getPeople);
router.post("/", addPerson);
router.get("/:id", getPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

// router.get("/:id", (req, res) => {
//   const personId = parseInt(req.params.id);
//   const person = people.find((p) => p.id === personId);

//   if (!person) {
//     return res.status(404).json({ message: "Person not found" });
//   }
//   return res.status(200).json(person);
// });

module.exports = router;
