const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", ()=>{
    console.log(`connected to Server`)
});

socket.addEventListener("message", (message)=>{
    console.log('New msg: ', message.data)
})

socket.addEventListener("close", () =>{
    console.log("Connected closed")
})

setTimeout(()=>{
    socket.send("hello from the browser")
}, 5000)