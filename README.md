# Safari VPN Browser Extension and Backend Infrastructure Setup

## Safari VPN Browser Extension

This browser extension provides a secure and private browsing experience by encrypting your internet connection and masking your IP address.

### Features
- Secure VPN connection
- Easy to use
- No logging policy

### Installation
1. Download the Safari VPN extension from the [official website](#).
2. Open Safari and go to Preferences > Extensions.
3. Click on 'Install' and select the downloaded extension.

### Usage
- After installing the extension, click the VPN icon in the Safari toolbar.
- Toggle the connection to start protecting your browsing activity.

## Backend Infrastructure Setup

To set up the backend infrastructure for the Safari VPN, follow these steps:

### Prerequisites
- Docker installed on your machine.
- Access to a cloud service provider (AWS, Azure, etc.) for deployment.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Auuauugghh/idk.git
   cd idk
   ```

2. Build the Docker containers:
   ```bash
   docker-compose build
   ```

3. Start the containers:
   ```bash
   docker-compose up -d
   ```

4. Configure environment variables as needed, according to the `.env.example` file.

5. Access the service via the specified endpoint (check your Docker configuration).

### Notes
- Ensure that all services are running by checking the Docker logs using:
   ```bash
   docker-compose logs
   ```
- For production deployment, make sure to set up proper security configurations.  

If you encounter issues, please raise an issue in the repository.