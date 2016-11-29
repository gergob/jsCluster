# My benchmark results

### No clustering
```
Concurrency Level:      100
Time taken for tests:   88.973 seconds
Complete requests:      1000000
Failed requests:        0
Keep-Alive requests:    1000000
Total transferred:      211000000 bytes
HTML transferred:       12000000 bytes
Requests per second:    11239.39 [#/sec] (mean)
Time per request:       8.897 [ms] (mean)
Time per request:       0.089 [ms] (mean, across all concurrent requests)
Transfer rate:          2315.93 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       3
Processing:     1    9   0.8      9     164
Waiting:        1    9   0.8      9     164
Total:          1    9   0.8      9     164

Percentage of the requests served within a certain time (ms)
  50%      9
  66%      9
  75%      9
  80%      9
  90%     10
  95%     10
  98%     10
  99%     11
 100%    164 (longest request)
```

### Clusterint with the cluster module
```
Concurrency Level:      100
Time taken for tests:   26.769 seconds
Complete requests:      1000000
Failed requests:        0
Keep-Alive requests:    1000000
Total transferred:      211000000 bytes
HTML transferred:       12000000 bytes
Requests per second:    37357.30 [#/sec] (mean)
Time per request:       2.677 [ms] (mean)
Time per request:       0.027 [ms] (mean, across all concurrent requests)
Transfer rate:          7697.65 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       3
Processing:     0    3   1.6      2      67
Waiting:        0    3   1.6      2      67
Total:          0    3   1.6      2      70

Percentage of the requests served within a certain time (ms)
  50%      2
  66%      3
  75%      3
  80%      3
  90%      4
  95%      4
  98%      6
  99%      8
 100%     70 (longest request)
```

### Clustering with PM2
```
Concurrency Level:      100
Time taken for tests:   28.246 seconds
Complete requests:      1000000
Failed requests:        0
Keep-Alive requests:    1000000
Total transferred:      211000000 bytes
HTML transferred:       12000000 bytes
Requests per second:    35402.82 [#/sec] (mean)
Time per request:       2.825 [ms] (mean)
Time per request:       0.028 [ms] (mean, across all concurrent requests)
Transfer rate:          7294.92 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.3      0      31
Processing:     0    3   1.9      3      58
Waiting:        0    3   1.9      3      58
Total:          0    3   2.0      3      61

Percentage of the requests served within a certain time (ms)
  50%      3
  66%      3
  75%      3
  80%      4
  90%      5
  95%      7
  98%      8
  99%     10
 100%     61 (longest request)
```
