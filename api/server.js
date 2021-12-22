const express = require("express");

const PORT = 8080;

const app = express();


app.get("/controller/company/:companyName", (req, res) => {
    console.log('gsdgdsgd')
    let companyName = req.params.companyName;
    res.json({logo: 'ffsfsf', name: companyName, type: 'public'});
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
