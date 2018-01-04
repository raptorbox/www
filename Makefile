.PHONY: deps build docker/build docker/push

deps:
	npm i

build:
	npm run build
