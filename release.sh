#!/bin/bash

# --- CONFIGURATION ---
HOST="ftp.daedaluslab.it"
USER="18098417@aruba.it"
REMOTE_DIR="/www.daedaluslab.it"  # Remote directory to clean and upload to

# --- ASK FOR PASSWORD ---
read -s -p "Enter FTP password for $USER@$HOST: " PASS
echo

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

# Clean remote directory 
echo "Cleaning remote folder: $REMOTE_DIR"
cd "$REMOTE_DIR"
cls -1 | while read item; do
    if [ -n "\$item" ]; then
        echo "Removing \$item"
        rm -r "\$item"
    fi
done

# Upload local contents (recursively), excluding some files/folders
echo "Uploading files from local folder..."
mirror -R --exclude-glob "$SCRIPT_NAME" --exclude-glob ".git*" ./ "$REMOTE_DIR"

bye
EOF

echo "Upload complete."
