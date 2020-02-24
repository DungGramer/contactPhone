var readline = require('readline-sync');
var convertText = require('./convertText');
var showContact = require('./showContact');

function findContact(contact) {
  var x = readline.question('Nhập ký tự muốn tìm: ');
  if (!isNaN(x)) {
    x = Number(x);
    var finded = new Array();
    for (i of contact) {
      if (Number(i.phone).toString().indexOf(Number(x).toString()) >= 0) {
        finded.push(i);
      }
    }
    showContact(finded);
  } else {
    x = x.toString();
    var finded = new Array();
    for (i of contact) {
      if (convertText(i.name).toLowerCase().indexOf(convertText(x).toLowerCase()) >= 0) {
        finded.push(i);
      }
    }
    showContact(finded);
  }
}
module.exports = findContact;