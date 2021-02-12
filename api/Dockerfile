FROM python:3.9
WORKDIR /src/app
ADD requirements.txt ./
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
COPY ./ ./
RUN chmod -R 755 /src/app/entry-point.sh
ENTRYPOINT [ "bash", "/src/app/entry-point.sh" ]