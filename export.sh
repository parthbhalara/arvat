#!/bin/bash

# Clean up previous builds
rm -rf .next out

# Install dependencies
npm install

# Build (which will now generate static output)
npm run build

# The static site will be in the 'out' directory
echo "Static site has been generated in the 'out' directory" 