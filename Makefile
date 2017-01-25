# Makefile
# Replace <app-name> with your app's name
# Replace <server-ip> with your server's IP address
# Replace <image-name> with custom docker tag. 
# (<username>/<appname>) format
# Replace <container-name> with a custom name.
APP_NAME:=todos
TARGET_DIRECTORY:=home/todo-graphql-server
SERVER_IP:=139.59.237.100
IMAGE_NAME:=hiepth9x/todos-server
CONTAINER_NAME:=todos-server
TARBALL_NAME:=bundle.tar.gz.
URL:=acocean.xyz
PORT:=80
PHONY: build
build:
    @echo "-------------------------------------------------------"
    @echo "Creates a tarball under ./deploy"
    @echo "-------------------------------------------------------"
    @echo "Building..."
    # Remove previous build
    @rm -rf ./bundle ./deploy/$(TARBALL_NAME) 
    @meteor build . --server="$(URL)" --directory
    @cp ./deploy/Dockerfile ./bundle
    @tar -zcf ./$(TARBALL_NAME) ./bundle
    @mv ./$(TARBALL_NAME) ./deploy
    @rm -rf ./bundle
    @echo "Builded successfully!"
    @echo "(the build output tarball is ./deploy/bundle.tar.gz)".
PHONY: deploy
deploy:
    @echo "-------------------------------------------------------"
    @echo "Uploading and running app in a docker container"
    @echo "-------------------------------------------------------"
    @ssh root@$(SERVER_IP) \
        "cat > $(TARGET_DIRECTORY)/$(TARBALL_NAME) ; \
        cd $(TARGET_DIRECTORY) ; \
        tar -xzf ./$(TARBALL_NAME) ; \
        cd ./bundle ; \
        docker stop $(CONTAINER_NAME) ; \
        docker rm $(CONTAINER_NAME) ; \
        docker build --tag $(IMAGE_NAME) . ; \
        docker run -p $(PORT):80 --name $(CONTAINER_NAME) -d $(IMAGE_NAME) ; \
        " \
   < ./deploy/$(TARBALL_NAME)