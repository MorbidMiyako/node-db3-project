const db = require("../data/db-config")

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
}

function find() {
  return db("schemes")
}

function findById(id) {
  return db("schemes").where({ id }).first()
}

function findSteps(id) {
  return db.select("*")
    .from("schemes")
    .join("steps")
    .on("schemes.id", "=", "steps.scheme_id")
}

function add(schemeData) {
  return db("schemes").insert(schemeData)
}

function addStep(stepData, id) {
  return db.select("*")
    .from("schemes")
    .join("steps")
    .on("schemes.id", "=", "steps.scheme_id")
    .insert(stepData)
}

function update(changes, id) {
  return db("schemes")
    .where("id", "=", { id })
    .update(changes)
}

function remove(id) {
  return db("schemes").where("id", "=", id).del()
}



