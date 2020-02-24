var fs = require('fs');
var readline = require('readline-sync');
var showContact = require('./showContact');

function editContact(contact) {
  showContact(contact);
  var choose = readline.question('Chọn vị trí bạn muốn sửa: ');
  choose = parseInt(choose) - 1;

  var name = readline.question('name: ');
  var phone = readline.question('phone: ');

  contact[choose].name = name;
  contact[choose].phone = phone;
}
module.exports = editContact;