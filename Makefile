up:
	docker-compose up -d --remove-orphans
stop:
	docker-compose stop
build:
	docker-compose build
ps:
	docker-compose ps
sh:
	docker-compose exec frontend bash
rebuild:
	docker-compose stop
	docker-compose build
	docker-compose up -d
