#!/bin/bash

echo "watching..."
nodemon -w "playbooks/templates/dendron.template.release.md" -w "data/*" -e ".md,.yml" --exec "./scripts/release.sh"