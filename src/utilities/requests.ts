export const host =
  import.meta.env.MODE !== 'production' ? 'http://localhost:5000' : ''

/**
 * @description - Helper GET method for sending requests to and from the Python/Flask services.
 * @param {string} route - Path of the Python/Flask service you want to use.
 * @param {Function} callback - Callback function which uses the returned data as an argument.
 * @return response data from Python/Flask service.
 * @memberof Requests
 */
export const get = (
  route: string,
  callback: (response: object) => void,
  errorCallback?: (response: object) => void,
) => {
  fetch(`${host}/${route}`)
    .then((response) => response.json())
    .then(callback)
    .catch((error) =>
      errorCallback ? errorCallback(error as Error) : console.error(error),
    )
}

/**
 * @description - Helper POST method for sending requests to and from the Python/Flask services.
 * @param body - request body of data that you want to pass.
 * @param route - URL route of the Python/Flask service you want to use.
 * @param callback - optional callback function to be invoked if provided.
 * @return response data from Python/Flask service.
 * @memberof Requests
 */
export const post = (
  body: string,
  route: string,
  callback: (response: object) => void,
  errorCallback?: (response: object) => void,
) => {
  fetch(`${host}/${route}`, {
    body,
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
  })
    .then((response) => response.json())
    .then(callback)
    .catch((error) =>
      errorCallback ? errorCallback(error as Error) : console.error(error),
    )
}
