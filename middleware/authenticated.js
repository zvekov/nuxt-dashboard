export default function ({ $strapi, redirect }) {
  if (!$strapi.user) {
    return redirect('/auth/signin')
  }
}
