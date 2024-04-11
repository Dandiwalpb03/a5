const port = process.env.PORT || 5000; 
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://bhupinderjit007:VERl0zmhp9rCkcDr@cluster0.owvvbi4.mongodb.net/'; 

module.exports = {
  port,
  mongoURI
};