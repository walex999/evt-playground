FROM ubuntu:jammy

ARG TARGETARCH
ARG REPOSITORY_USER=""
ARG REPOSITORY_PASSWORD=""
ARG CLIENT_VERSION=1.6.1

# Install nginx as a base service to enable automation
RUN apt update && apt install -y systemd curl nginx

# Download horizon-cli with curl to allow caching
RUN curl -u "$REPOSITORY_USER:$REPOSITORY_PASSWORD" "https://repo.evertrust.io/repository/horizon-cli/horizon-cli-$CLIENT_VERSION-linux-$TARGETARCH.bin" > /usr/local/bin/horizon-cli && \
    chmod +x /usr/local/bin/horizon-cli
COPY ./etc/horizon-cli.conf /opt/horizon/etc/horizon-cli.conf

# Install dummy certs
COPY ./certs /var/ssl
COPY ./etc/nginx.conf /etc/nginx/nginx.conf

RUN systemctl enable nginx

CMD ["/lib/systemd/systemd"]