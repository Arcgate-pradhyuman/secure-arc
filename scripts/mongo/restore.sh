# Restore the MongoDB data from the dump directory
sudo docker exec -it mongodb_container mongorestore /dump

echo "Restoration completed!"
