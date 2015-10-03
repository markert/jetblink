
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
	
ghpages:
	git checkout gh-pages
	git checkout master www/
	cp www/src.js src.js
	cp www/index.html index.html
	cp www/jet.js jet.js
	rm -rf www/
	git add . --all
	git commit -m "update gh-pages"
	git push
	git checkout master

.PHONY: eslint test build beautify ghpages
