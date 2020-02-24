var fs = require('fs');

function savetoJSON(data) {
  var saveData = JSON.stringify(data);
  fs.writeFileSync('./data.json', saveData, { encoding: 'utf8' });
}
module.exports = savetoJSON;