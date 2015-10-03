
BIN = ./node_modules/.bin
ESLINT = $(BIN)/eslint
BROWSERIFY = $(BIN)/browserify
MOCHA = $(BIN)/mocha
UGLIFY = $(BIN)/uglifyjs
BEAUTIFY = $(BIN)/js-beautify

eslint: src/*.js
	$(ESLINT) $^

test:
	$(MOCHA) --compilers js:babel/register

beautify: ./src/*.js ./www/*.js ./www/*.html
	$(BEAUTIFY) $^ --replace

server:
	python -m SimpleHTTPServer 8080

.PHONY: eslint test build beautify ghpages
