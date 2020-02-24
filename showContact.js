function showContact(contact) {
  return contact.map(x => console.log('Name: ' + x.name + ' || Phone: ' + x.phone));
}
module.exports = showContact;