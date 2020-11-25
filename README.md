# Cloudrun-Sandbox
execute user generated code on cloud-run (GKE)

![cloudrun code](https://codefibershq.com/assets/blog/cloudrun.png "CloudRun")

# Run Locally
- Deploy `packages/backend` to cloud run 
- `yarn start-editor`
- use the endpoint from step 1


# Backend

## Deploy 

make sure gutils are installed
### Build the multi-lang-img
- `cd packages/backend/multi-lang-img`
- `gcloud builds submit --tag gcr.io/<PROJECT-NAME>/cloud-sandbox/multi-lang-img`

## Upload Backend Server
- `cd packages/backend/multi-lang-img`
- `gcloud builds submit --tag gcr.io/<PROJECT-NAME>/cloud-sandbox-server`

## Google cloud run
- open [console](https://console.cloud.google.com/run/create?<PROJECT-NAME>)
- select the uploaded image and complete the wizard
- grab the url from the dashboard (e.g. https://cloudrun-sandbox-something-something.a.run.app)
- open your browser to `<URL>/ping` and get a `pong`

# [Dashboard](https://cloudrun-sandbox.netlify.app/)

- use the built link to test your code


# Todo
- [X] introduce [stress testing](https://github.com/loadimpact/k6)
- [X] [backend] add helm protection on overuse
- [X] [backend] improve intra-process communication (currently done with stdout)
