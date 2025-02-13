FROM postgres:15

# Set database name
ENV POSTGRES_DB=keepUp
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=mysecretpassword

# Copy initialization scripts
COPY ./init/*.sql /docker-entrypoint-initdb.d/ 