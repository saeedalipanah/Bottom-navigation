export default defineNuxtRouteMiddleware((to, _) => {
  if (to.path === '/') {
    return navigateTo({name:'Home'})
  }
})