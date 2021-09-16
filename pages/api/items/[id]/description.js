import { API_MELI, AUTHOR } from "../../../../src/utils/constants";

export default function handler(req, res) {
  const { id } = req.query;
  let info = AUTHOR;
  fetch(`${API_MELI.ITEMS}${id}${API_MELI.DESCRIPTION}`)
    .then((response) => response.json())
    .then((data) => {
      info = { ...info, ...data };
      res.status(200).json(info);
    })
    .catch((error) => res.status(500).json(error));
}