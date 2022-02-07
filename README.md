## I'm working on this noncommercial project to get more experience in npm oriented development.

I don't have clear plan now.
So plan will be constracted in dynamic way (issues block), and then all ideas will be implemented by myself (or any contributor who ready to invest their time into this project)

### Common steps to reproduce

```
npm i -D concurrently
```

### Commands (can be checked in the `package.json` file)

```
npm run dev
```

#### Mongo

install docker the first and then start mongo container

```
docker pull mongo
docker run -d  --name mongo-on-docker  -p 27888:27017 -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
```

    docker run runs the image and starts the container;
    -d runs the container in background, so that we are free to use the current terminal instance;
    --name mongo-on-docker defines a friendly name for the container;
    -p 27888:27017 declares that the local port 27888 is mapped to the internal 27017 port;
    -e MONGO_INITDB_ROOT_USERNAME=mongoadmin sets the root username (-e sets the environment variables);
    -r MONGO_INITDB_ROOT_PASSWORD=secret sets the root password;
    mongo is the name of the image to run;
