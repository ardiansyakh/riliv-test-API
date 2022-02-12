'use strict';
const fs = require('fs')
const bcrypt = require('bcrypt')
let seed = JSON.parse(fs.readFileSync('./utils/admin.json', null, 2))
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(seed.password, salt);

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: seed.email,
      password: hash,
      role: seed.role,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
