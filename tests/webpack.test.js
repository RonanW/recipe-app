var context = require.context(__dirname, true, /.test\.js$/);
context.keys().forEach(context);