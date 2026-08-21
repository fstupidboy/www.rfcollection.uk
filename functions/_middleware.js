// Block pages.dev duplicate: 301 www-rfcollection-uk.pages.dev → https://www.rfcollection.uk
// Runs on every request; redirects ONLY when hostname IS the pages.dev mirror,
// preserving path + query. Other hostnames (incl. the canonical domain) pass
// through — no redirect loop possible. Pure JS, no imports.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === "www-rfcollection-uk.pages.dev") {
    return Response.redirect("https://www.rfcollection.uk" + url.pathname + url.search, 301);
  }
  return context.next();
}
