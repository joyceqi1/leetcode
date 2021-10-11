function test (arg) {
    console.log(arg)
  }
function debounce (fun, delay){
    return function (args) {
      let that = this
      let _args = args
      let timer
      clearTimeout(timer)
      timer = setTimeout(() => {
        fun.call(that, _args)
      }, delay)
    }
  }
 