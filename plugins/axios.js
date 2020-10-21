export default function({ $axios, app, store, redirect }) {
    $axios.onRequest((config) => {
      const token = app.$cookies.get(process.env.token_id);
      config.headers.common["Mobile-Agent"] = `site;;0.0.10;;browser;;0.0.0`;
      if (token) {
        config.headers.common["Authorization"] = `Token ${token}`;
      } else {
        config.headers.common["Authorization"] = `access_token ${app.$cookies.get(
          process.env.access_token
        )}`;
      }
      const lang = app.$cookies.get("langSlug")
      if(lang){
        app.$cookies.set("django_language", lang)
        // config.headers.common["Accept-Language"] = "ru-RU,ru;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6";
      }
    });
    // $axios.onError((error) => {
    //   if (error.response && error.response.status >= 500) {
    //     store.commit("data/SET_COMMON_ALERT", {
    //       isAlertVisible: true,
    //       content:
    //         "Непредвиденная ошибка. Пожалуйста попробуйте позже или обратитесь в службу поддержки",
    //       type: "error",
    //       handlerOk: () => {
    //         store.commit("data/UNSET_COMMON_ALERT");
    //       },
    //       handlerCancel: () => {
    //         store.commit("data/UNSET_COMMON_ALERT");
    //       },
    //     });
    //   }
    // });
  }
  