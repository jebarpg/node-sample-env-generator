# node-sample-env-generator
Creates a .sample-env file with all the entries from your .env file without the information after the = sign using nodejs. Comments are preserved. The .sample.env file is made to be a safe file to commit to your git repo.

# Install
```
    npm install sample-env --save-dev
```

# Usage

### Default
```
    node sample-env
```
Looks for a .env file inside the directory you run the command from and converts it into .sample.env file

### Custom file
```
    node sample-env -f .env.production
```
Looks for a .env.production file inside the directory you run the command from and converts it into .sample.env.production file.