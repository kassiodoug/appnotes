import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 2000
});

export const busca = async (url, setDado) => {
  const resposta = await api.get(url);
  setDado(resposta.data);
};

export const post = async (note) => {
  // const resposta = await api.post(url);
  // setDado(resposta.data)

  api({
    method: "post",
    url: "/notes",
    data: {
      title: note.title,
      body: note.body,
      id: note.id,
    },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
