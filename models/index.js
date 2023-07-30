const CustomUser = require('./CustomUser'); 
const CustomPost = require('./CustomPost'); 
const CustomComment = require('./CustomComment'); 

CustomPost.belongsTo(CustomUser, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

CustomPost.hasMany(CustomComment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
});

CustomComment.belongsTo(CustomUser, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

module.exports = {
  CustomUser,
  CustomComment,
  CustomPost,
};
