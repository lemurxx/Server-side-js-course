const echo = require('./echo.js');

echo.repeat('repeat', (err, echoedText) => console.log(echoedText));
console.log(echo.repeatSync('repeatSync'));