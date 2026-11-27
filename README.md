# Automated Docker Deployment with Azure

## Project Overview

This project demonstrates the containerization and automated publishing of a Node.js application using Docker, GitHub Actions, and GitHub Container Registry (GHCR), with Azure Virtual Machine deployment planned as the next phase.

## Architecture

- **Development:** GitHub Codespaces
- **Application:** Node.js
- **Containerization:** Docker
- **CI/CD:** GitHub Actions
- **Container Registry:** GitHub Container Registry (GHCR)
- **Planned Deployment Environment:** Ubuntu Server 24.04.5 LTS on Azure Virtual Machine

## Completed Implementation

- Developed a Node.js HTTP application.
- Created a Dockerfile using Node.js 24 Alpine.
- Built and tested the Docker image.
- Created a GitHub Actions workflow to automate image building and publishing.
- Published the Docker image to GHCR.
- Pulled the published image from GHCR.
- Launched a container using the published image.
- Verified application availability through an HTTP request.

## Container Configuration

| Setting | Value |
|---|---|
| Published image | `ghcr.io/acnweze/azure-devops-deployment:latest` |
| Container name | `ghcr-deployment-app` |
| Application port | `3000` |
| Host port | `3002` |
| Registry | GitHub Container Registry |
| Test environment | GitHub Codespaces |

## CI/CD Workflow

The GitHub Actions workflow:

1. Checks out the repository.
2. Authenticates with GitHub Container Registry.
3. Builds the Docker image from the `app` directory.
4. Publishes the image to GHCR.
5. Tags the image as `latest` and with the commit SHA.

## Application Verification

The published image was successfully pulled and launched in GitHub Codespaces.

Test command:

```bash
curl http://localhost:3002
```

Expected response:

```json
{
  "application": "Azure DevOps Deployment Lab",
  "status": "Running",
  "environment": "Docker",
  "server": "Azure Virtual Machine",
  "message": "Successfully deployed using CI/CD!"
}
```

## Upcoming Implementation

- Deploy the published Docker image to the Azure Virtual Machine.
- Configure remote container deployment.
- Verify application accessibility from the Azure VM.
- Document the complete deployment process.

## Objective

To demonstrate practical skills in Docker containerization, CI/CD automation, GitHub Actions, container registry management, Linux administration, and Azure cloud deployment.

## Screenshots

### 1. Docker Image Build and HTTP Test
![Docker build and HTTP test](Screenshot%202026-11-26%20171934.jpg)

### 2. Docker Image Inventory
![Docker image inventory](Screenshot%202026-11-26%20172025.jpg)

### 3. Initial Container Deployment
![Initial container deployment](Screenshot%202026-11-26%20172204.jpg)

### 4. Git Push
![Git push](Screenshot%202026-11-26%20172607.jpg)

### 5. GHCR Container Status
![GHCR container running](Screenshot%202026-11-27%20125721.jpg)

### 6. GHCR Application Verification
![GHCR application verification](Screenshot%202026-11-27%20130435.jpg)
