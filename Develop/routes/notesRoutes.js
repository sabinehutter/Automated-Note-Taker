
var notesData = require("../../../../db/db.json");

// ===============================================================================
// ROUTING
// ===============================================================================

console.log(notesData)

module.exports = function(app) {
  // API GET Requests

  app.get("/api/notes", function(req, res) {
    res.json(notesData);
  });

  // API POST Requests

  app.post("/api/notes", function(req, res) {

    // if (tableData.length < 5) {
    //   tableData.push(req.body);
    //   res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }

    console.log(req.body)
  });

//   app.delete("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });
};
