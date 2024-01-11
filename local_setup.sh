#!/bin/bash

# Install project dependencies
npm install

# Install Vue CLI globally
npm install @vue/cli

# Save the file and give it execute permissions
chmod +x local_setup.sh

# Run the serve command
npm run serve

