var context = require.context('./test', true, /Spec\.cjsx$/);
context.keys().forEach(context);
