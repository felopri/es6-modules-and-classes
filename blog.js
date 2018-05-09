let Blog = function() {
};
Blog.prototype[Symbol.toStringTag] = 'Blog Class';
let blog = new Blog();
console.log(blog.toString());
//[object Blog Class]


let values = [8, 12, 16];
values[Symbol.isConcatSpreadable] = false;
console.log([].concat(values));
//[[8, 12, 16]] 