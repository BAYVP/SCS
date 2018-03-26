# SCS
Base repo for projects in Shreemaya Community Services.
All the code related to server,utilities and client apps will be under this repo.

## Local development

For development please build your local docker image until we finalize online registry to
upload our image that you can pull and build.

In order to use dockerfile to build your image please follow these steps:

- Download and configure docker on your machine https://docs.docker.com/install/
- cd into SCS/docker folder
- execute `docker build -t <your_image_name_in_lower_case> . `
- Once your local docker image is ready please access it using following command
     `docker run -it -v /Users/<your_user_name>:/Users/<your_user_name> <your_local_image_name>:latest bash`
  > We can use -v argument to mount our local filesystem within container so that we can access local files 
  and IDE while working within docker easily.    
