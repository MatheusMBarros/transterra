const http = require('http');
const routes = require('./routes');
const url = require('url');
const bodyParser = require('./helpers/bodyParser');


const server = http.createServer((request,response) => {
    const parsedUrl = url.parse(request.url, true);

    console.log(`request.method: ${request.method}| endpoint: ${parsedUrl.pathname}`);

    let { pathname } = parsedUrl;

    let id = null


const splitEndpoind = pathname.split('/').filter(Boolean);

if (splitEndpoind.length > 1){
    pathname = `/${splitEndpoind[0]}/:id`
    id = splitEndpoind[1];
}
    const route = routes.find((routeObj) => (routeObj.endpoint === pathname && routeObj.method === request.method
        )
    )

    if(route){
        request.query = parsedUrl.query;
        request.params = {id}
        response.send=(statusCode,body)=>{
            response.writeHead(statusCode,{'Content-Type': 'application/json'})
            response.end(JSON.stringify(body))
        }
if(['POST','PUT','PATCH'].includes(request.method)){
        bodyParser(request,()=>{route.handler(request,response)})
}
        else{
            route.handler(request,response);

        }

        
    }else{
        response.writeHead(404,{'Content-Type': 'application/json'})
        response.end(`Cannot ${request.method} ${pathname}}`);
    }


})

server.listen(4444,()=>{
    console.log(`Server is running on port 4444`);
}); 