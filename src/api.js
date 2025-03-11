import strava from "strava-v3";
strava.routes.get(10096009, (err, payload) => {
  if (err) {
    console.error("Error obteniendo la ruta:", err);
  } else {
    console.log("Datos de la ruta:", payload);
    }
});
// Configura la autenticación de la API de Strava
strava.config({
  access_token: 'cd19e526f414459256faf48b27e789fe3d571bcf',  // Reemplaza con tu token de acceso
  client_id: '138279',        // Reemplaza con tu client_id de Strava
  client_secret: '9fd5c91e47313a68f8ec7f3564d47e66a30f031d', // Reemplaza con tu client_secret de Strava
  redirect_uri: 'http://localhost:3000'   // Asegúrate de que incluya el protocolo
});
