import contacts from "../../mock/contacts";

export default (req, res) => {
  res.json({
    contacts,
  });
};
