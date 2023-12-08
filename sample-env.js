const commander = require("commander");
const readline = require("readline");
const fs = require("fs");

commander
  .name("sample-env")
  .description(
    "Default usage looks for a .env file in the directory you run this command in and generates a .sample.env file stripped of all values. Which you can then safely commit the .sample.env to your git repo without any of your private data being committed."
  )
  .version("1.0.0", "-v, --version")
  .usage("[OPTIONS]...")
  .option(
    "-f, --file <value>",
    'Pass in a custom .env file to make a sample for. For example pass in ".env.prod" will use the ".env.prod" file to generate ".sample.env.prod" file.'
  )
  .parse(process.argv);

const options = commander.opts();

var file = ".env";

//check if they passed the -f or --file flag and if so then use the value passed in.
if (options.file) {
  file = options.file;
}

var sample_file_name = '.sample' + file

const rl = readline.createInterface({
  input: fs.createReadStream(file),
});

//Create new file or overwrite existing file
fs.writeFile(sample_file_name, "", function (err) {
  if (err) {
    // append failed
    console.log("failed to write to file " + sample_file_name);
  } else {
    // done
  }
});

//read .env file line by line and convert into a .sample.env file
rl.on("line", (line) => {
  console.log("Line from file:", line);
  //Replace lines such as HOST=localhost with just HOST=. Also keep preserve comment lines
  var sample_text = line.replace(/((?:^.*?=|^\s*#.*)).*$/g, "$1");
  //Preserve comments at the end of a line if present, then append them i.e. 
  //HOST=sensitive_data #comment text here 
  //becomes
  //HOST= #comment text here
  var comment = line.replace(/^.+?(#.*$)/gm, "$1");
  if (comment != line) sample_text += " " + comment + "\n";
  else sample_text += "\n";
  console.log(sample_text);
  console.log("comment: " + comment);
  fs.appendFile(sample_file_name, sample_text, function (err) {
    if (err) {
      // append failed
      console.log("failed to append to file " + sample_file_name);
    }
  });
});
