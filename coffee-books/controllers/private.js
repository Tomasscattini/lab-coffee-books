const Place = require("../models/Place")

exports.profileView = (req, res) => res.render("private/profile")

exports.placesView = async(req, res) => {
    const places = await Place.find()
    res.render("private/places", { places })
}

exports.placesCreate = (req, res) => res.render("private/createPlace")

exports.placesCreateMethod = async(req, res) => {
    const { name, placeType } = req.body
    await Place.create({ name, placeType })
    res.redirect('/places')
}

exports.placeEdit = async(req, res) => {
    const plId = req.params.placeId
    const placeToEdit = await Place.findById(plId)
    res.render("private/edit", { placeToEdit })
}

exports.placeEditMethod = async(req, res) => {
    const { id } = req.params.placeId
    const { name, placeType } = req.body;
    await Place.findByIdAndUpdate(id, { name, placeType }, { new: true })
    res.redirect("/places")
}

exports.placeDelete = async(req, res) => {
    await Place.findByIdAndRemove(req.params.placeId)
    res.redirect('/places')
}