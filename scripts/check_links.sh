#!/bin/bash
[[ ! -d "reports" ]] && mkdir reports
cd reports && awesome_bot ../docs/_site/notes/*.html --allow-redirect --allow-dupe --allow 429 -w "https://github.com/dendronhq/dendron/compare/*,https://github.com/dendronhq/dendron/commit/*,https://username.github.io"

