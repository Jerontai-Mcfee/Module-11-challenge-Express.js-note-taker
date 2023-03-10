const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);
//writes to file
const writeToFile = (destination, content)=>
 fs. writeFile(destination, JSON.stringify(content, null, 4 ),(err) =>
 err? console.error(err) : console.info(`\nData written to ${destination}`)
 );

 const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file, parsedData);
      }
    });
  };

//   pulled in uuid  to assign numbers
  const uuid = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

 
module.exports = { readFromFile, writeToFile, readAndAppend, uuid };
