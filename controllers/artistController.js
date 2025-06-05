const Artist = require('../models/Artist');

// get all
const getArtists = async (req, res) => {
    const artists = await Artist.find();
    res.json(artists);
};

// create
const createArtist = async (req, res) => {
    const artist = new Artist(req.body);
    await artist.save();
    res.json(artist);
};

// update
const updateArtist = async (req, res) => {
    const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(artist);
};

// delete
const deleteArtist = async (req, res) => {
    await Artist.findByIdAndDelete(req.params.id);
    res.json({ message: 'Artist deleted' });
};

module.exports = {
    getArtists,
    createArtist,
    updateArtist,
    deleteArtist,
};
