
const figlet = require('figlet');

const text = 'Hello, World!';


figlet(text, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.err(err);
        return;
    }
  
    console.log(data);
});
