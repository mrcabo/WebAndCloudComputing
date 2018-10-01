FROM python:3.4
ENV PYTHONUNBUFFERED 1

RUN mkdir /backend
WORKDIR /backend
COPY requirements.txt /backend
RUN pip3 install -r requirements.txt

CMD ["python", "manage.py", "runserver"]
