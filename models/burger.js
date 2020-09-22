// Import ORM object
let orm = require("../config/orm.js");


// Create burger object
let burger = {
    selectAll:  function(cb) {
        orm.selectAll("burger", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burger", cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(cols, vals, condition, cb) {
        orm.updateOne("burger", cols, vals, condition, function(res) {
            cb(res);
        });
    }
};


// Export burger object
module.exports = burger;