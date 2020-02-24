/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var fs = require('fs');
var readline = require('readline-sync');
var inputContact = require('./inputContact');
var editContact = require('./editContact');
var savetoJSON = require('./savetoJSON');
var showContact = require('./showContact');
var deleteContact = require('./deleteContact');
var findContact = require('./findContact');
var contacts = [];

function loadData() {
  var file = fs.readFileSync('./data.json');
  contacts = JSON.parse(file);
}
function saveAndExit(data) {
  savetoJSON(data);
}
function option() {
  console.log('1. Nhập dữ liệu contact');
  console.log('2. Sửa dữ liệu contact');
  console.log('3. Xoá contact');
  console.log('4. Tìm kiếm contact');
  console.log('5. Hiển thị contact');
  console.log('0. Lưu và thoát');
  var select = readline.question('> ');

  switch (select) {
    case '1':
      inputContact(contacts);
      savetoJSON(contacts);
      option();
      break;
    case '2':
      editContact(contacts);
      savetoJSON(contacts);
      option();
      break;
    case '3':
      deleteContact(contacts);
      savetoJSON(contacts);
      option();
      break;
    case '4':
      findContact(contacts);
      option();
      break;
    case '5':
      showContact(contacts);
      option();
      break;
    case '0':
      saveAndExit(contacts);
      break;
    default:
      console.log('Lỗi cú pháp');
      break;
  }

}
function home() {
  loadData();
  option();
}
home();