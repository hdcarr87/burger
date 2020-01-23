var connection = require("../config/connection.js");



//selectAll()
var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??"; "";

        connection.query(queryString, [tableInput], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
//insertOne()
    create: function(table, cols, vals, cb) {
        var queryString = "INTERT INTO" + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);

        connection.query(querySting, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
//updateOne()
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE" + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }

        cb(result);
      });
    },    
};


module.exports = orm;