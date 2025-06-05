const express = require('express');
const router = express.Router();
const {
  getArtists,
  createArtist,
  updateArtist,
  deleteArtist,
} = require('../controllers/artistController');

router.get('/', getArtists);
router.post('/', createArtist);
router.put('/:id', updateArtist);
router.delete('/:id', deleteArtist);

module.exports = router;
