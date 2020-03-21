var http = require('http');
function myname (){          
  return "Here is my IP address";
}
function callHttpbi() {
    let promise = new Promise((resolve, reject) => { 
        http.get('http://httpbin.org/ip', 
        async function(response) {
            var str="";
            await response.setEncoding('utf8');
            await response.on('data', function(data){
                str += data;
            });
            await response.on('end', function() {
                var result = JSON.parse(str);
                myips = result.origin;
                resolve(myips)
            });
        });
    });

    return promise; 
}
async function executeAsyncTask(){ 
  const valueA = await callHttpbi() 
  const valueB = await myname(); 
  console.log(valueB+" "+valueA)
}
executeAsyncTask();
// Output Here is my IP address 149.24.160.1, 149.24.160.1