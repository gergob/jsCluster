# jsCluster
Cluster Implementation Variations in Node

### Installing dependencies 

```
npm install
```

### Choose the server you want to run

1. Basic server without clustering.  
Start: `node serverSingle.js`

2. Clustering with the `cluster` module.  
Start: `node serverCluster.js`  

3. Clustering with the `cluster` module, with process respawning.  
Start: `node serverClusterRespawn.js`  

4. Clustering with the PM2 process manager.  
Install: `npm install pm2@latest -g`  
Start: `pm2 start serverSingle.js -i max`  
Stop: `pm2 stop all`  
Delete: `pm2 delete all`

### Benchmarking

While one of the servers is running, you can do the benchmarks with:  
```
ab -n 1000000 -c 100 -k http://localhost:3000/
```