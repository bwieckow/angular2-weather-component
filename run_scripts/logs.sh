#!/bin/bash

SERVICE=$1

docker service logs -f --since 60m weather_${SERVICE}
