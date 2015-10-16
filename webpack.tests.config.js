var context = require.context('./test', true, /Spec\.coffee$/);
context.keys().forEach(context);
