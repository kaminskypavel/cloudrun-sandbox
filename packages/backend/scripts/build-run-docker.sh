cd ../
docker build -t "cloudrun/js-runner" .
docker run --rm -it -p 8080:8080 cloudrun/js-runner
