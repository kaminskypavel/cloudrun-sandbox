cd ../
docker build -t "kaminskypavel/sandbox-runner" .
docker run --rm -it -p 8080:8080 kaminskypavel/sandbox-runner
