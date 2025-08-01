#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Checks if Docker is installed and running.
check_docker() {
    command -v docker &> /dev/null || { echo "Docker is not installed. Please install Docker."; exit 1; }
    docker info &> /dev/null || { echo "Docker daemon is not running. Please start Docker."; exit 1; }
}

# --- Main Execution ---

check_docker

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
# Change to the script's directory to ensure relative paths work
cd "$SCRIPT_DIR"

# Check for the --full flag to determine the restart mode
if [ "$1" == "--full" ]; then
    echo "Performing a full restart of all services..."
    docker compose -f tests/docker-compose.yml down --remove-orphans
    docker compose -f tests/docker-compose.yml up -d --build
    
    echo "All services are up and running!"
    echo "Express App: http://localhost:3000"
    echo "PostgreSQL Database: Running internally as 'postgres' service"
    echo "pgAdmin UI: http://localhost:5050"
    echo "Swagger Docs: http://localhost:8080" 
else
    echo "Starting/rebuilding Express app and Swagger docs only..."
    docker compose -f tests/docker-compose.yml up -d --no-deps --build app docs

    echo "Express app and Swagger docs are up and running!"
    echo "Express App: http://localhost:3000"
    echo "Swagger Docs: http://localhost:8080"
    echo "pgAdmin UI: http://localhost:5050"

    echo "To perform a full restart of all services (Express, Postgres, pgAdmin, Swagger Docs), run this script with the --full flag."
fi