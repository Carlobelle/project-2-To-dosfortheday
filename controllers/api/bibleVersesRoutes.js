const router = require('express').Router();
const { BibleVerse } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBibleVerse = await BibleVerse.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBibleVerse);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const BibleVerseData = await BibleVerse.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!BibleVerseData) {
      res.status(404).json({ message: 'No BibleVerse found with this id!' });
      return;
    }

    res.status(200).json(BibleVerseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
