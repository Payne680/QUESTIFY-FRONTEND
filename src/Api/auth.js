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

export async function getCurrentUser() {
  const { data } = await httpClient.get('users/current-user');
  return data;
}

export function saveProject(title) {
  return httpClient.post('projects', title);
}

export function saveColumns(title) {
  return httpClient.post('states', title);
}
