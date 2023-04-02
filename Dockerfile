FROM python:3.10

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    git
    
ENV WEBPAGE_WS /root/webpage_ws

WORKDIR $WEBPAGE_WS

ADD . $WEBPAGE_WS
##RUN git clone https://github.com/sayakboi/webpage_ws.git $WEBPAGE_WS

EXPOSE 8000

CMD python3 -m http.server 8000
