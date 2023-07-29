#!/bin/bash

# Import settings
mongoimport --db supertest --collection settings --file settings.json --jsonArray

# Import systems
mongoimport --db supertest --collection systems --file systems.json --jsonArray

# Import testers
mongoimport --db supertest --collection testers --file testers.json --jsonArray

# Import users
mongoimport --db supertest --collection users --file users.json --jsonArray
