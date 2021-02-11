FROM python:3.9
WORKDIR /src/app
ADD requirements.txt ./
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
COPY ./ ./
RUN chmod +x /src/app/env.sh
CMD ["/src/app/env.sh"]
