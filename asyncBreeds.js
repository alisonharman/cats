// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) 
      callback(data);
    else {
      callback();
    }
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

const printOutFileDetails = breed => {
  console.log('Return value: ', breed)
};

// we try to get the return value
breedDetailsFromFile('Bombay', printOutFileDetails);

// export the function
module.exports = breedDetailsFromFile;