# node-sample-env-generator
Creates a .sample-env file with all the entries from your .env file without the information after the = sign using NodeJS. Comments are preserved. The .sample.env file is made to be a safe file to commit to your git repo.

# Install
```
npm install sample-env-generator --save-dev
```

# Usage

### Default
```
node sample-env-generator
```
Looks for a .env file inside the directory you run the command from and creates a .sample.env version of the file.

### Custom file
```
node sample-env-generator -f .env.production
```
Looks for a .env.production file inside the directory you run the command from and creates a .sample.env.production version of the file.
