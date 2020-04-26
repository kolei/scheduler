    'use strict';

    module.exports = {
        up: (queryInterface, Sequelize) => {
            return queryInterface.bulkInsert(
                'groups',
                [   {id: 1, name: 'И-31'},
                    {id: 2, name: 'С-21'},
                    {id: 3, name: 'И-21'} 
                ], {});
        },

        down: (queryInterface, Sequelize) => {
            return queryInterface.bulkDelete('groups', null, {});  
        }
    };
