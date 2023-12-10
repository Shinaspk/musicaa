const jsonServer=require('json-server')
const PlayerServer=jsonServer.create()

const router=jsonServer.router('db.json')

const middleware=jsonServer.defaults()

PlayerServer.use(middleware)
PlayerServer.use(router)

const port =4000 || process.env.PORT

PlayerServer.listen(port,()=>{
    console.log("successs");
})