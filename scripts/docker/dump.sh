sudo docker exec -it mongodb_container mongodump -o /dump
sudo docker cp mongodb_container:/dump ./dump
echo "Dump completed!"
