const mongoose = require('mongoose');
const app = require('./App')
const port = 4001
mongoose.connect("mongodb://localhost:27017/emi-calculator").then(() => {
    app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
});