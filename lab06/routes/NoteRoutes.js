const NoteModel = require('../models/NotesModel');
const express = require('express');
const noteRoutes = express.Router();
const { default:mongoose } = require("mongoose");



//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
noteRoutes.post('/notes', async (req, res) => {
    // Validate request
  if (!req.body.noteTitle || !req.body.noteDescription) {
    return res.status(400).json({
        status: false,
        message: "Note title and description cannot be empty"
    });
}
    //TODO - Write your code here to save the note
    const newNoteData = req.body
    try{
        const newNoteModel = new NoteModel(newNoteData)
        const newNote = await newNoteModel.save()
            res.status(200).json({
                status:true,
                message: "New Note Added Succsfully",
                data: newNote
            })
    }catch(error){
        res.status(500).json({
            status:true,
            message: error.message,
        })
    }


});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
noteRoutes.get('/notes', (req, res) => {
    // Validate request

    //TODO - Write your code here to returns all note
        NoteModel.find()
        .then((notes) => {
            res.status(200).json({
                status: true,
                message: "Notes fetched successfully",
                count: notes.length,
                data: notes

            })
        }).catch((err) => {
            res.status(500).json({
                status: false,
                message: err.message
            })
        })
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
noteRoutes.get('/notes/:noteId', async (req, res) => {
    // Validate request
     const noteId = req.params.noteId

    if(!mongoose.Types.ObjectId.isValid(noteId)){
        return res.status(400).json({
            status: false,
            message: "Invalid note ID"
        })
    }
    
    //logic to get book by id
    const note = await NoteModel.findById(noteId)

    if(!note) {
        return res.status(404).json({
            status: false,
            message: `note not found for id: ${noteId}`
        })
    }

    res.status(200).json({
        status: true,
        message: `note fetched successfully for id: ${noteId}`,
        data: note,
    })
   

});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
noteRoutes.put('/notes/:noteId', async (req, res) => {
    // Validate request
     const noteId = req.params.noteId
     const updateData = req.body
    
    try {
        if(!mongoose.Types.ObjectId.isValid(noteId)){
            return res.status(400).json({
                status: false,
                message: "Invalid note ID"
            })
        }

         //logic to update book by id
        const updatedNote = await NoteModel.findByIdAndUpdate(noteId, updateData, {new: true})
        if(!updatedNote) {
            return res.status(404).json({
                status: false,
                message: `note not found for id: ${noteId}`
            })
        }

        res.status(200).json({
            status: true,
            message: `note updated successfully for id: ${noteId}`,
            data: updatedNote,
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }


    //TODO - Write your code here to update the note using noteid
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    const noteId = req.params.noteId

    try {
        if(!mongoose.Types.ObjectId.isValid(noteId)){
            return res.status(400).json({
                status: false,
                message: "Invalid note ID"
            })
        }
        
         //logic to delete book by id
         const deletednote = await NoteModel.findByIdAndDelete(noteId)
         if(!deletednote) {
             return res.status(404).json({
                 status: false,
                 message: `Note not found for id: ${noteId}`
             })
         }

        res.status(200).json({
            status: true,
            message: `note deleted successfully for id: ${noteId}`,
            data: deletednote,
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
});

module.exports = noteRoutes;
