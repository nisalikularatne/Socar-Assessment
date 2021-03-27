const Model = require('./base');

class Car extends Model {
    static tableName = 'cars';

    static getTableName() {
        return this.tableName;
    }

    $beforeInsert() {
        this.created_at = new Date().toISOString();
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString();
    }

    static get relationMappings() {
        const CarListing = require('@socar/socar-test/models/car_listing');
        return {
            carlistings: {
                relation: Model.BelongsToOneRelation,
                modelClass: CarListing,
                join: {
                    from: 'cars.id',
                    to: 'car_listings.car_id'
                }
            }
        };
    }
}

module.exports = Car;
