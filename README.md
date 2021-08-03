### 
+ Build it
```shell
$ docker build -t booking-app:1.0 .
```
```shell
$ docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p3001:3000 -e CHOKIDAR_USEPOLLING=true booking-app:1.0
```

+ Running the jmeter using the command line
```shell
$ /Users/arunstiwari/Downloads/apache-jmeter-5.4.1/bin/jmeter -j jmeter.save.saveservice.output  -n -t ./bookable.jmx -l  bookables.jtl 
```














































