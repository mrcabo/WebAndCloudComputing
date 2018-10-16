FROM python:3.6
ENV PYTHONUNBUFFERED 1

RUN mkdir /backend
WORKDIR /backend
COPY . /backend/

RUN pip3 install -r requirements.txt

CMD ["python3", "manage.py", "runserver", "127.0.0.1:8000"]
