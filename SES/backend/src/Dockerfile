# Dockerfile

# FROM directive instructing base image to build upon
FROM python:3.6
ENV PYTHONUNBUFFERED 1
# COPY startup script into known file location in container
RUN mkdir /backend
WORKDIR /backend
COPY . /backend/

RUN pip3 install -r requirements.txt
# EXPOSE port 8000 to allow communication to/from server
EXPOSE 8000

# CMD specifcies the command to execute to start the server running.
#CMD ["python3", "manage.py", "runserver"]
CMD ["./start.sh"]
# done!
