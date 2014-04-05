

console.log('CLASS EXAMPLE');
var child = new Child('Valera', 'yellow');
console.log('Name: ' + child.getName() + ', extra: ' + child.getExtra() + '\n');


console.log('ASYNC EXAMPLE');
var asyncFunc = function(child: Child, complete, cancel) {
  console.log('async, name: ' + child.getName());
  complete(child);
};

var wrongFunc = function(data: string, complete, cancel) {
  console.log(data);
  complete(data);
};

sequence([
  asyncFunc
]).call(null, child, function() {
  console.log('Good news, everyone!');
}, console.error);
