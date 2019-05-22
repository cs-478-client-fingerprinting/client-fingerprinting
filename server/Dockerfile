FROM golang
WORKDIR go/src/fingerprinting

COPY . .

RUN go get ./...
RUN go install -v ./...
# RUN ["go", "get", "github.com/githubnemo/CompileDaemon"]

EXPOSE 8000

# ENTRYPOINT CompileDaemon -log-prefix=false -build="go build ." -command="fingerprinting"
CMD ["fingerprinting"]