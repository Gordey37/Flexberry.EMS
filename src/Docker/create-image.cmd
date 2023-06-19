docker build --no-cache -f SQL\Dockerfile.PostgreSql -t ems/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t ems/app ../..
