import { httpClient } from './axios';

export function register(user) {
  return httpClient.post('users', user);
}

export function login(emailAddress, password) {
  return httpClient.post('users/login', { emailAddress, password });
}

export function addTeam(team) {
  return httpClient.post('notifications', team);
}
