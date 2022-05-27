const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');

// This is a middle ware again that tells us where our UI files are 
app.use(express.static('build'))

app.use(cors());

app.get('/', (req, res) => {
    res.send("ENDPOINTS");
})

app.get('/api/v1/user', (req, res) => {
    const user = {
        name: "Prabh",
        age: 27
    }

    return res.status(200).json({
        data: user,
        message: "Succesfully fetched the user!"
    })
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
