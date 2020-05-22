FROM centos:7

LABEL version="1.0"

RUN yum update -y && yum install -y tar make \
  sudo \
  unzip \
  which \
  wget

RUN yum clean all

# Install pip
RUN wget https://bootstrap.pypa.io/ez_setup.py -O - | python

# Without python-devel, you cannot install python modules
# http://stackoverflow.com/questions/5178416/pip-install-lxml-error/5178444#5178444
RUN yum -y install python-devel; yum -y clean all
RUN yum -y install gcc-c++; yum -y clean all

# Install nodejs, npm
RUN curl -sL https://rpm.nodesource.com/setup_13.x | bash -
RUN yum install -y nodejs npm

EXPOSE 3000
