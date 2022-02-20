// Create an array with all the characters to print
// create a variable for the delay starting at 100
// loop through an array and then process standardout, concatenate with the r and space

const spinner = function() {
  let x = 0;
  let spinner = ["|", "/", "-", "\\", "|", "/", "-"];

  for (let i = 0; i < spinner.length; i++) {
    setTimeout(()=> {
      process.stdout.write('\r' + spinner[i] + '        ');
    }, x);
    x += 200;
    
  }
};

spinner();