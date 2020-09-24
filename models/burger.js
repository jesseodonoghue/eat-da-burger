// Import ORM object
let orm = require("../config/orm.js");


// Create burger object
let burger = {
    selectAll:  function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(cols, condition, cb) {
        orm.updateOne("burgers", cols, condition, function(res) {
            cb(res);
        });
    },

    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res);
        });
    }
};


// Export burger object
module.exports = burger;