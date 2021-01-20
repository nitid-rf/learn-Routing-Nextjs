import contacts from "../../../mock/contacts";
export default (req, res) => {
  const { query } = req;
  const { id } = query; // หรือ req.query.id
  const contact = contacts.find((contact) => contact.id == id) || {};
  res.json({
    contact,
  });
};