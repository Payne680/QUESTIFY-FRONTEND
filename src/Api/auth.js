import { httpClient } from './axios';

export function register(user) {
  return httpClient.post('users', user);
}

export function login(username, password) {
  return httpClient.post('login', { username, password });
}
