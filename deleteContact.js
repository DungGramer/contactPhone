var showContact = require('./showContact');
var readline = require('readline-sync');
function deleteContact(contact) {
  showContact(contact);
  var choose = readline.question('Chọn vị trí bạn muốn xoá: ');
  choose = parseInt(choose) - 1;

  contact.splice(choose, 1);
}
module.exports = deleteContact;