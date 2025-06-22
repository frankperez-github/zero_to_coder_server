#!/bin/bash

echo "[+] Building python-sandbox image..."
docker build --no-cache -t python-sandbox ./src/docker-python-runner
