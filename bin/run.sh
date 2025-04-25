#!/bin/bash

read -p "Enter typescript file name (excl ext): " FILE

extension=".ts"
path="../src/"

echo "`npx tsc` $path$FILE$extension"

sleep 2

echo `node store.js'
