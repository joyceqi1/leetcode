function Promise(fn){
    var value = null, callbacks = [];
    this.then = function(onFulfilled) {
        callbacks.push(onFulfilled)
    }
    function resolve(value){
        callbacks.forEach(function (callback){
            callback(value)
        })
    }
    fn(resolve)
}