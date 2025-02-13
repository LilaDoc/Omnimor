# Variables
API_DIR = keepUpAPI
APP_DIR = keepUpApp

# Couleurs pour les messages
GREEN = \033[0;32m
NC = \033[0m # No Color

.PHONY: install start stop clean help

# Commande par défaut
default: help

# Installation des dépendances
install:
	@echo "${GREEN}Installation des dépendances du backend...${NC}"
	cd $(API_DIR) && npm install
	@echo "${GREEN}Installation des dépendances du frontend...${NC}"
	cd $(APP_DIR) && npm install

# Démarrage des services
start:
	@echo "${GREEN}Démarrage du backend...${NC}"
	cd $(API_DIR) && nodemon index.js & 
	@echo "${GREEN}Démarrage du frontend...${NC}"
	cd $(APP_DIR) && npm run dev &

# Arrêt des services
stop:
	@echo "${GREEN}Arrêt des services...${NC}"
	@-pkill -f "node.*keepUpAPI"
	@-pkill -f "node.*keepUpApp"

# Nettoyage
clean:
	@echo "${GREEN}Nettoyage des node_modules...${NC}"
	rm -rf $(API_DIR)/node_modules
	rm -rf $(APP_DIR)/node_modules

# Aide
help:
	@echo "Usage:"
	@echo "  make install    - Installe les dépendances"
	@echo "  make start     - Démarre le backend et le frontend"
	@echo "  make stop      - Arrête tous les services"
	@echo "  make clean     - Supprime les node_modules" 
	@echo "  make run       - Lancer le serveur et l'application avec logs"
	@echo "  make run-server - Lancer le serveur"
	@echo "  make run-app    - Lancer l'application"
	@echo "  make stop-server - Stopper le serveur"
	@echo "  make stop-app    - Stopper l'application"


# Commande pour lancer le serveur et l'application avec logs
run:
	cd $(API_DIR) && node index.js

	cd $(APP_DIR) && npm run dev 

# Commande pour lancer le serveur
run-server:
	cd $(API_DIR) && node index.js

# Commande pour lancer l'application
run-app:
	cd $(APP_DIR) && npm run dev 

# Commande pour stopper le server
stop-server:
	@-pkill -f "node.*keepUpAPI"
	@-pkill -f "node.*keepUpApp"

# Commande pour stopper l'application
stop-app:
	@-pkill -f "node.*keepUpApp"
