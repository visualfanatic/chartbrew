module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define("Team", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });

  Team.associate = (models) => {
    models.Team.hasMany(models.Project, { foreignKey: "team_id" });
    models.Team.hasMany(models.TeamRole, { foreignKey: "team_id" });
    models.Team.hasMany(models.TeamInvitation, { foreignKey: "team_id" });
    models.Team.hasMany(models.Template, { foreignKey: "team_id" });
  };

  return Team;
};
