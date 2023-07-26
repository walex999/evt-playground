FROM ubuntu:jammy

WORKDIR /root

ENV DEBIAN_FRONTEND=noninteractive
ENV DEBCONF_NONINTERACTIVE_SEEN=true

RUN apt update && apt install -y systemd ansible git

RUN ansible-galaxy collection install git+https://github.com/Evertrust/horizon-ansible.git

COPY etc/ansible /etc/ansible
COPY playbooks/ .
COPY templates/ templates/

CMD ["/lib/systemd/systemd"]