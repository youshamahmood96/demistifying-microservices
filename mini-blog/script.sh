#!/usr/bin/bash
# declare STRING variable
STRING="Starting node processes"
#print variable on a screen
echo $STRING

cd post-service && npm start&
cd comments-service && npm start&
cd moderation-service && npm start&
cd event-bus && npm start&
cd query-service && npm start&
cd client && npm start

# wait until both background processes finish
wait