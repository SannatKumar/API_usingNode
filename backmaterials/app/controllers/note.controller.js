const Note = require('../models/note.model.js');

//create and Save a new Note
exports.create = (req, res) => {
    //Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    //Create a Note
    const note = new Note({
        title: req.body.title || "Untitled Note",
        content: req.body.content

    });

    //Save note in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the note."
        });
    });

};

//REtriev and return all notes from the database
exports.findAll = (req, res) => {

};

//Find a single note with a NoteId
exports.findOne = (req, res) => {

};

//Update a note with the specified noteId in the request
exports.update = (req, res) => {

};

//Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};


