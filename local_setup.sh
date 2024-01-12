#!/bin/bash

# Install project dependencies
npm install

# Install Vue CLI 
npm install @vue/cli

# Install Vue yarn 
npm install --save-dev yarn

# Save the file and give it execute permissions
chmod +x local_setup.sh

# Run the serve command
npm run serve

