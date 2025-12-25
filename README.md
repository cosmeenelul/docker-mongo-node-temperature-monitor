# 🌡️ Raspberry Pi Server CPU Monitor

A professional-grade server health utility designed to monitor and log Raspberry Pi CPU temperature. This project demonstrates a modern, containerized DevOps workflow with cloud integration.

---

### 🚀 Overview
This project is a dedicated server health utility designed to monitor and log Raspberry Pi CPU temperature. It utilizes a Node.js and Express backend to collect thermal data and stores it in a persistent MongoDB database managed via Docker Compose. The deployment process follows a professional CI/CD pipeline, where container images are built, versioned, and hosted on Amazon ECR (Elastic Container Registry), ensuring a seamless and scalable cloud-native workflow for both ARM64 and AMD64 architectures.

### 🛠️ Tech Stack
* **Backend:** Node.js & Express (REST API)
* **Database:** MongoDB (Persistent data storage)
* **DevOps:** Docker & Docker Compose
* **Cloud Registry:** Amazon ECR (Elastic Container Registry)
* **Hardware:** Raspberry Pi (ARM64 Architecture)

---

### 🏗️ CI/CD & Deployment Workflow
This project follows a professional **Build-Push-Deploy** lifecycle:
1.  **Build:** Docker images are optimized for AARCH64 (Raspberry Pi 4).
2.  **Ship:** Images are versioned and pushed to **Amazon ECR** for secure, centralized management.
3.  **Deploy:** The environment is orchestrated using **Docker Compose**, pulling the latest images from the cloud registry.

### 📊 Features

* **Real-time Tracking:** Captures precise CPU thermal data directly from the system's thermal zone (`/sys/class/thermal/`).
* **Data Persistence:** Integrated MongoDB with **Docker Volumes** to ensure no data loss during container restarts or updates.
* **Mongo Express UI:** Features a built-in web interface for easy browsing and management of stored temperature logs.
* **Cloud-Native Architecture:** Fully optimized for **CI/CD integration** using **Amazon ECR** for automated image hosting.
* **Multi-Architecture Support:** Built specifically for **aarch64 (ARM64)**, ensuring seamless performance on Raspberry Pi 4/5.
* **Infrastructure as Code:** Uses Docker Compose for a "single-command" deployment, making the environment easy to replicate.

---

### 📦 Installation & Setup

#### 1. Prerequisites
* Docker & Docker Compose installed
* AWS CLI configured (for ECR access)
* Raspberry Pi OS (or any Linux distribution)

#### 2. Clone the Repository
```bash
git clone [https://github.com/cosmeenelul/docker-mongo-node-temperature-monitor.git](https://github.com/cosmeenelul/docker-mongo-node-temperature-monitor.git)
cd docker-mongo-node-temperature-monitor
```
#### 3. Deployment
```bash
aws ecr get-login-password --region your-region | docker login --username AWS --password-stdin your-account-id.dkr.ecr.your-region.amazonaws.com

docker-compose up -d
```
