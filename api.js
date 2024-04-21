const URL_API = "https://api-socket-main-xbxw.onrender.com/";

export const getSensors = async () => {
  const sensorsResponse = await fetch(URL_API);
  const { sockets } = await sensorsResponse.json();
  return sockets;
};

export const insertSensor = async (led) => {
  const res = await fetch(URL_API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(led),
  });
  return await res.json();
};

export const deleteSensors = async (_id) => {
  const res = await fetch(URL_API + _id, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await res.json();
};
