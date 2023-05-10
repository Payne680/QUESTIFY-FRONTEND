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
  return httpClient.get('users/current-user').then(({ data }) => data);
}

export function saveProject(title) {
  return httpClient.post('projects', title);
}

export function saveColumns(title) {
  return httpClient.post('states', title);
}
