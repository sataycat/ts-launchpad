# Core
This should hold your backend server logic.


## API Client testing
To manually test APIs, you can use curl
```bash
curl http://localhost:3000/api/v1/balls
```
or [bruno](https://docs.usebruno.com/) where the collection is already set up in `/bruno`


## Guiding principles
- Project/Folder structure generally follows the [tao of node](https://alexkondov.com/tao-of-node/#co-locate-functionality) where business logic is grouped together in sub folders instead of the typical MVC pattern.
- I prefer routers to be declared in a single place (`/routers`) instead of [within the modules](https://alexkondov.com/tao-of-node/#keep-routes-in-modules) since I believe routing is an application configuration, not its core functionality.
