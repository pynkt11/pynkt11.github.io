export async function onRequest(context) {
  const redirectMap = {
    "19082_Bolshie_izmeneniia_v_industrii_azartnykh_igr": "https://t.me/s/VideoSlotscode",
    // Добавь сюда остальные пары "имя_страницы": "ссылка_для_редиректа"
  };

  let path = context.params.path || '';
  path = path.replace(/\.html$/, '');

  if (redirectMap[path]) {
    return Response.redirect(redirectMap[path], 301);
  }

  return fetch(context.request);
}
