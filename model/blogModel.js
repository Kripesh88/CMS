module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define("blog", {
      Title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subTitle: {
        type: DataTypes.STRING,
        allowNull : false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull:false
      },
     
    
    });
    return Blog;
  };