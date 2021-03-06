
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }, name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      surname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      facebook: {
        allowNull: false,
        type: Sequelize.STRING
      },
      instagram: {
        allowNull: false,
        type: Sequelize.STRING
      },
      twitter: {
        allowNull: false,
        type: Sequelize.STRING
      },
      google: {
        allowNull: false,
        type: Sequelize.STRING
      },
      relationship: {
        allowNull: false,
        type: Sequelize.STRING
      },
      living: {
        allowNull: false,
        type: Sequelize.STRING
      },
      living: {
        allowNull: false,
        type: Sequelize.STRING
      },
      working: {
        allowNull: false,
        type: Sequelize.STRING
      },
      photo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function () {
      queryInterface.createTable('statuses', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        status:
          {
            allowNull: false,
            type: Sequelize.STRING
          },
        rating:
          {
            type: Sequelize.INTEGER
          },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        uid: {
          type: Sequelize.INTEGER,
          references: { model: 'users', key: 'id' }
        }
      })
    }).then(function () {
      queryInterface.createTable('photos', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        photo:
          {
            allowNull: false,
            type: Sequelize.STRING
          },
        rating:
          {
            type: Sequelize.INTEGER
          },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        uid: {
          type: Sequelize.INTEGER,
          references: { model: 'users', key: 'id' }
        }
      })
    }).then(function () {
      queryInterface.createTable('userFriends', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        u1id:
          {
            allowNull: false,
            type: Sequelize.INTEGER
          },
        u2id:
          {
            allowNull: false,
            type: Sequelize.INTEGER
          },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users').queryInterface.dropTable('statuses').dropTable('photos');
  }
}
