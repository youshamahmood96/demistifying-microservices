# Docker CLI
1. To create and run a container using an image.
```
docker run <image-name>
```
for example:
```
docker run hello-world
```
It is identical to combining these two commands:
```
docker create <image-name>
docker start -a <container-id>
```
when we run a docker container, we attach the command with it, there is no way we can change the command later on.
2. To create an run a container using an image, and overriding the default command
```
docker run <image-name> <overriding command>
```
for example:
```
docker run busybox echo hi there
```
3. List all currently running containers.
```
docker ps
```
4. List all containers ever.
```
docker ps --all
```
5. Delete all the stopped containers,networks not used by atleast one container, all dangling images, all dangling build caches
```
docker system prune
```
6. Retrieve all the logs, container may be stopped
```
docker logs <container-id>
```
7. Stop a running container
```
docker stop <container-id>
```
8. Kill a container
```
docker kill <container-id>
```
If `docker stop` doesnt stop a container within 10 seconds, `docker kill` will take over.

9. Execute an additional command in a container
```
docker exec -it <container-id> <command>
```
for example,
```
docker exec -it 4bed120466cf redis-cli
```
`-it` flag here is combination of `-i` & `-t`
<br/>
`-i` flag makes sure that when we exceute a new command inside that terminal, we attach it with `STDIN`
<br/>
`-t` flag is for format

10. Open up a command shell in the context of a running container to execute command
```
docker exec -it <container-id> sh
```
for example
```
docker exec -it 4bed120466cf sh
```
11. Open a container with shell directly
```
docker run -it <image-name> sh
```





