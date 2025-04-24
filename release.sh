#!/bin/bash

# --- CONFIGURATION ---
HOST="ftps.example.com"
USER="your_username"
PASS="your_password"
REMOTE_DIR="/remote/path"  # Remote directory to clean and upload to

# --- SCRIPT SETTINGS ---
SCRIPT_NAME=$(basename "$0")
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Change to script's directory
cd "$SCRIPT_DIR" || exit 1

# --- START FTP SESSION ---
lftp -u "$USER","$PASS" "$HOST" <<EOF
set ftp:ssl-force true
set ftp:ssl-protect-data true
set ftp:ssl-auth TLS
set ssl:verify-certificate no

# Remove remote folder contents
echo "Cleaning remote folder: $REMOTE_DIR"
cd "$REMOTE_DIR"
cls -1 | while read item; do
    if [ -n "\$item" ]; then
        echo "Trying to remove \$item..."
        rm -r "\$item"
    fi
done

# Upload local folder recursively, excluding the script itself
echo "Uploading files from local folder..."
mirror -R --exclude-glob "$SCRIPT_NAME" ./ "$REMOTE_DIR"

bye
EOF

echo "Upload complete."
