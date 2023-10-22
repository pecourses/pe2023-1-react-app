import CONFIGS from './../configs';

export function loadUsers(options) {
  const defaultOptions = {
    page: 1,
    results: 10,
    baseUrl: CONFIGS.BASE_URL,
    resultsOrder: CONFIGS.RESULTS_ORDER,
  };

  const realOptions = {
    ...defaultOptions,
    ...options,
  };

  return fetch(
    `${realOptions.baseUrl}?results=${realOptions.results}&page=${realOptions.page}&seed=${realOptions.defaultOptions}`
  ).then(response => response.json());
}
