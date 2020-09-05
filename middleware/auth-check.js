export default function(context) {
  console.log(context.req)
  if (process.client) {
    context.store.dispatch('initAuth', null);
  } else {
    context.store.dispatch('initAuth', context.req);
  };
};