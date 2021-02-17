const redis = require("redis");
const config = {
    host:'localhost',
    port:'6379',
    pass : ''
}
const client = redis.createClient(config);
client.on("connect", ()=>{
    console.log("redis connected successfully");
});
client.on("error", (error)=>{
    console.log("Error encountered : "+error);
})

client.on("exit", function(){
    client.quit();
});
client.set("name", "Nishoo Gupta", redis.print);
client.get("name", redis.print);

