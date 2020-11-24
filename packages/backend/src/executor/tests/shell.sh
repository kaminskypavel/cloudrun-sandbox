#!/bin/bash
echo "runner.sh [language] [filename]"
TIMEOUT="${1:-60}"

echo "staring script --> "
echo "sleeping for $TIMEOUT seconds"
sleep $TIMEOUT
echo "done script <--"
