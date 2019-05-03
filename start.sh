#!/bin/bash
npm install
cd server
go build server.go
chmod +x server.go
cd ..

./server/server & npm start --prefix=ui

