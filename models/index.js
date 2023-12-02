const User = require('./User');
const BibleVerse = require('./BibleVerse');

User.hasMany(BibleVerse, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BibleVerse.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, BibleVerse };
