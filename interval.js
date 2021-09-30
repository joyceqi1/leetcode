let count = 0

function fun() {

    for (let i = 0; i < 5; i++) {
        (function(){
            setTimeout(()=>{
                
            })
        })(i)
    }

}
fun()