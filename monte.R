

library(jsonlite)

values <- fromJSON("C:/Users/msk-afanasiev/Proj/MonteCarloFun/values.json", flatten=TRUE)

values <- c()

hist(values, breaks=c(0, 10, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 5000), xlim=c(0, 1000))


hist(values, freq=FALSE, breaks=10000, xlim=c(0, 1000))


mean(values, trim=0, na.rm = FALSE)

var(values)

d <- density(values)

plot(d, xlim = c(0, 100))

quantile(values, c(0.25, 0.30, 0.40, 0.5, 0.6, 0.66, 0.7, 0.75, 0.8, 0.9, 0.95, 0.98, 0.99))