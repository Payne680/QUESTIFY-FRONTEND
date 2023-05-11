import { httpClient } from './axios';

export function register(user) {
  return httpClient.post('users', user);
}

export function login(emailAddress, password) {
  return httpClient.post('users/login', { emailAddress, password });
}

export function invitations(email) {
  return httpClient.post('notifications', email);
}

export function getCurrentUser() {
  return httpClient.get('current-user').then(({ data }) => data);
}

export function saveProject(title) {
  return httpClient.post('projects', title);
}

/* export function saveColumns(title) {
  return httpClient.post('states', title);
} */

export function saveColumn(title) {
  return httpClient.post('states', title);
}

export function getColumns() {
  return httpClient.get('states').then(({ data }) =>
    data.length > 0
      ? data
      : [
          {
            db_id: null,
            id: Date.now(),
            title: 'TODO',
            cards: [],
          },
        ]
  );
}
