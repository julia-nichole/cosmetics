const BASE_URL = '/api/cats';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(ct) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(ct)
  }).then(res => res.json());
}

export function update(ct) {
  return fetch(`${BASE_URL}/${ct._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(ct)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}
