export function loadUsers(options) {
  const defaultOptions = {
    page: 1,
    results: 10,
  };

  const realOptions = {
    ...defaultOptions,
    ...options,
  };

  return fetch(
    `https://randomuser.me/api/?results=${realOptions.results}&page=${realOptions.page}&seed=pe2023`
  ).then(response => response.json());
}
