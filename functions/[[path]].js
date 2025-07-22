export async function onRequest(context) {
  // Здесь нужно заполнить все пары "имя_страницы": "URL для редиректа"
  const redirectMap = {
    "19082_Bolshie_izmeneniia_v_industrii_azartnykh_igr": "https://t.me/s/VideoSlotscode",
    "14170_Schastlivchik_vyigral_dva_raza_podriad_v_Map": "https://t.me/s/VideoSlotscode",
    // Добавь сюда остальные 3000 пар
  };

  try {
    let pathParam = context.params.path;

    let path = "";
    if (Array.isArray(pathParam)) {
      path = pathParam.join("/");
    } else if (typeof pathParam === "string") {
      path = pathParam;
    } else {
      path = "";
    }

    // Убираем расширение .html, если есть
    path = path.replace(/\.html$/, "");

    if (redirectMap[path]) {
      return Response.redirect(redirectMap[path], 301);
    }

    // Если в redirectMap нет записи — возвращаем исходный запрос
    return fetch(context.request);
  } catch (e) {
    return new Response(`Internal Server Error\n${e.message}`, { status: 500 });
  }
}

