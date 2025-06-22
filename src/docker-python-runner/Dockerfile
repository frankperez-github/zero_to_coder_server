FROM python:3.10-slim

WORKDIR /app

COPY run_script.sh /app/run_script.sh
RUN chmod +x /app/run_script.sh

ENTRYPOINT ["/app/run_script.sh"]
