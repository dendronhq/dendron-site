#!/bin/bash

rm -r site-builder/docs 2>/dev/null || true
mkdir site-builder/docs
echo "copying files..."
cp vault/* site-builder/docs