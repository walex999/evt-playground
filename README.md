# 🏖️ evertrust-playground

## Description

This repository aims to bootstrap an environment to demonstrate the use of EverTrust's products.

## Components

The distribution packages the following components :

- A Stream instance, preconfigured with a software key vault.
- An Horizon instance, preconfigured with enrollment profiles and Stream as a PKI connector.
- A sample webserver (nginx) instance, with a pre-installed Horizon Client and dummy certificates

## Setup

As this project is based on Docker Compose, the only requirement is to have a fairly recent Docker engine installed locally. It supports both arm64 and amd64 architectures. Bootstrapping the project is straightforward :

1. The first step is to clone the repository to your local machine :
    ```
    git clone git@gitlab.com:evertrust/playground.git
    ```

1. Then, you'll need to configure licenses for both Stream and Horizon. The Compose project expects the following files to be present in the `licenses` folder :
   - `stream.lic` : The Stream license file
   - `horizon.lic` : The Horizon license file

1. Configure DNS entries to resolve to your local computer. The simplest way is to edit your `/etc/hosts` file, but you could also use a local DNS server such as `dnsmasq` :
    ``` 
    127.0.0.1 horizon.lab
    127.0.0.1 stream.lab
    127.0.0.1 webserver.lab
    ```

1. Docker will need to fetch Horizon, Stream and `horizon-client` from an authenticated repository. To do so, you'll need to login to the registry :
    ```bash
    export REPOSITORY_USER=<your username>
    export REPOSITORY_PASSWORD=<your password>
    docker login registry.evertrust.io -u $REPOSITORY_USER -p $REPOSITORY_PASSWORD
    ```
   The `REPOSITORY_USER` and `REPOSITORY_PASSWORD` variables are expected to be in environment every time you run `docker compose`.

1. Finally, you can start the project :
    ```
    docker-compose up -d
    ```

> Make sure ports 80, 443 and 8443 are not already in use on your local machine.

## Usage

The following services are exposed once the project is up and running :
- Horizon : https://horizon.lab
- Stream : https://stream.lab
- Webserver : https://webserver.lab:8443

To jump into the webserver container and test the Horizon Client, you can use the following command :
```
docker-compose exec webserver bash
```