include .env
export

.PHONY: copy-env-to-server
copy-env-to-server:
	@echo "Looking for .env files..."
	@files=$$(find . -name "*.env*" -type f); \
	echo "Found files:"; \
	select local_path in $$files; do \
		read -p "Enter destination file name (e.g., .env.production): " env_name; \
		scp -i ~/.ssh/id_rsa $$local_path $(SSH_USER)@$(SSH_HOST):$(SSH_PATH_TO_PROJECT)/$$env_name; \
		break; \
	done

.PHONY: copy-3d-models-to-server
copy-3d-models-to-server:
	@echo "Looking for 3d models..."
	@files=$$(find . -name "*.glb" -type f); \
	echo "Found files:"; \
	select local_path in $$files; do \
		scp -i ~/.ssh/id_rsa $$local_path $(SSH_USER)@$(SSH_HOST):$(SSH_PATH_TO_PROJECT)/public/3d-models/; \
		break; \
	done

.PHONY: redeploy-website
redeploy-website:
	git fetch && git pull
	docker compose build portfolio-web
	docker stop portfolio-web
	docker rm portfolio-web
	docker compose up portfolio-web -d
	docker images --filter "dangling=true" --quiet | xargs docker rmi

.PHONY: redeploy-website-from-local
redeploy-website-from-local:
	ssh $(SSH_USER)@$(SSH_HOST) 'cd $(SSH_PATH_TO_PROJECT) && make redeploy-website'

.PHONY: copy-file-to-server
copy-file-to-server:
	@read -p "Enter the full path to the local file: " local_path; \
	read -p "Enter the full path on the server (including filename): " remote_path; \
	scp -i ~/.ssh/id_rsa $$local_path $(SSH_USER)@$(SSH_HOST):$$remote_path