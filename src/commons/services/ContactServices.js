import * as API from '../configs/api';
const ENDPOINT = 'https://simple-contact-crud.herokuapp.com/';

export function getAllContacts() {
  return new Promise((resolve, reject) => {
    fetch(ENDPOINT + API.GET_CONTACTS)
      .then(res => {
        if (res.ok) {
          resolve(res.json());
        }
        reject(false);
      })
      .catch(() => {
        reject(false);
      });
  });
}

export function getContact(id) {
  return new Promise((resolve, reject) => {
    fetch(ENDPOINT + API.GET_CONTACT.replace(/{id}/, id))
      .then(res => {
        if (res.ok) {
          resolve(res.json());
        }
        reject(false);
      })
      .catch(() => {
        reject(false);
      });
  });
}

export function postContact(data) {
  return new Promise((resolve, reject) => {
    fetch(ENDPOINT + API.POST_CONTACT, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(res => {
        if (res.ok) {
          resolve(res.json());
        }
        reject(res.json());
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function putContact(data, id) {
  return new Promise((resolve, reject) => {
    fetch(ENDPOINT + API.PUT_CONTACT.replace(/{id}/, id), {
      method: 'PUT',
      body: JSON.stringify(data),
    })
      .then(res => {
        if (res.ok) {
          resolve(res.json());
        }
        reject(res.json());
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function deleteContact(id) {
  return new Promise((resolve, reject) => {
    fetch(ENDPOINT + API.DELETE_CONTACT.replace(/{id}/, id), {
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          resolve(res.json());
        }
        reject(res.json());
      })
      .catch(err => {
        reject(err);
      });
  });
}
