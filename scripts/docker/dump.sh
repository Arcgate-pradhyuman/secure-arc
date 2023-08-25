sudo docker exec -it mongodb_container mongodump -d secure -o /dump
sudo docker cp mongodb_container:/dump/secure ./dump
echo "Dump of 'secure' completed!"
