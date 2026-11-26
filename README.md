# Automated Docker Deployment to Azure VM

## Project Overview

This project demonstrates the containerization and automated deployment of a Node.js application using Docker, GitHub Actions, GitHub Container Registry (GHCR), and an Ubuntu-based Azure Virtual Machine.

## Architecture

- **Development:** GitHub Codespaces
- **Application:** Node.js
- **Containerization:** Docker
- **CI/CD:** GitHub Actions
- **Container Registry:** GitHub Container Registry
- **Deployment Environment:** Azure Virtual Machine (Ubuntu Server 24.04.5 LTS)

## Current Implementation

- Developed a Node.js HTTP application.
- Created a Dockerfile using Node.js 24 Alpine.
- Built a Docker image.
- Launched the application in a Docker container.
- Verified application availability through HTTP requests.

## Container Configuration

| Setting | Value |
|---|---|
| Image | azure-devops-deployment:v1 |
| Container | azure-devops-app |
| Container port | 3000 |
| Host port | 3001 |

## Upcoming Implementation

- Publish Docker images to GHCR.
- Configure GitHub Actions CI/CD.
- Automate deployment to Azure VM.
- Verify the deployed application.

## Objective

To demonstrate practical skills in containerization, CI/CD automation, Linux server administration, and cloud deployment.# automated-docker-deployment-azure
