function throll(fn,delay){
    return (msg)=>{
        setTimeout(()=>{
            fn(msg)
        },delay)
    }
}
function log(msg){
    console.log(msg)
}
// throll(log,100)('helloworld')
