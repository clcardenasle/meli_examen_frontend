import { API_MELI, AUTHOR } from "../../src/utils/constants";

export default function handler(req, res) { 
  const query = req.query.q;
  let info = AUTHOR;
  fetch(`${API_MELI.SEARCH}${query}`)
    .then((response) => response.json())
    .then((data) => {
      info = {...info, ...data};
      res.status(200).json(info);
    })
    .catch((error) => res.status(500).json(error));
};
