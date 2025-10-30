const express = require('express');
const port=4002;
const app = express();

app.get('/getstudents',(req, res) => {
   res.json({users:["Rabiya","shaikh"]
   });
});

app.listen(port, () =>{
        console.log('Listening on 4002');
});