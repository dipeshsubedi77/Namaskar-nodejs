module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define(
    "Blog",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },

      subtitle: {
        type: DataTypes.STRING,
        allowNull: false,
      
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    
  );

  return Blog;
};
