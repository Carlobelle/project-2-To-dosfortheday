const sequelize = require('../config/connection');
const { User, BibleVerse } = require('../models');

const userData = require('./userData.json');
const bibleVerseData = require('./bibleVerseData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const bibleVerse of bibleVerseData) {
    await BibleVerse.create({
      ...bibleVerse,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
