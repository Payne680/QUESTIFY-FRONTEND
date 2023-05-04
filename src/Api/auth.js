import { httpClient } from './axios';

export function register(user) {
  return httpClient.post('users', user);
}

export function login(emailAddress, password) {
  return httpClient.post('users/login', { emailAddress, password });
}

<<<<<<< HEAD
export function addTeam(team) {
  return httpClient.post('notifications', team);
=======
export function invitations(email) {
  return httpClient.post('notifications', email);
>>>>>>> ffdd03c2fcc2beaff279c23b0935e1099ea0145f
}
