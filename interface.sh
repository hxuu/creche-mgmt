#!/usr/bin/env bash

# Signup as educator
curl -X POST http://localhost:8080/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"username":"alice","password":"pass123","role":"educator"}'

echo
echo =========================================================================

# Access protected route (after running your own controller)
curl -u alice:pass123 http://localhost:8080/educator/dashboard

