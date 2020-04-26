    'use strict';

    module.exports = {
        up: (queryInterface, Sequelize) => {
            return queryInterface.bulkInsert(
                'Groups',
                [   {id: 1, name: 'И-31', createdAt: new Date(), updatedAt: new Date()},
                    {id: 2, name: 'С-21', createdAt: new Date(), updatedAt: new Date()},
                    {id: 3, name: 'И-21', createdAt: new Date(), updatedAt: new Date()} 
                ], {});
        },

        down: (queryInterface, Sequelize) => {
            return queryInterface.bulkDelete('Groups', null, {});  
        }
    };
