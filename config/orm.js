// Import connection
let connection = require("../config/connection.js");


// Create ORM object
let orm = {
    selectAll:  function(table, cb) {
        const queryString = "SELECT * FROM ?";

        connection.query(queryString, [table], (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        const queryString = "INSERT INTO ? (?) VALUES (?)";
        
        connection.query(queryString, [table, cols, vals], (err, result) => {
            if (err) throw err;

            cb(result);
        });

    },

    updateOne: function(table, cols, condition, cb) {
        const queryString = "UPDATE ? SET ? WHERE ?";
        
        connection.query(queryString, [table, cols, condition], (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },

    deleteOne: function(table, condition, cb) {
        const queryString = "DELETE FROM ? WHERE ?";
        
        connection.query(queryString, [table, condition], (err, result) => {
            if (err) throw err;

            cb(result);
        });
    }
};


//Export ORM object
module.exports = orm;