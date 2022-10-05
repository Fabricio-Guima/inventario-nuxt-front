export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        "Access-Control-Allow-Methods": "*",
      },
    },
  });

  // Set baseURL to something different
  api.setBaseURL(`http://localhost:8000/api`);

  // Inject to context as $api
  inject("api", api);
}
