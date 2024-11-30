import { http, HttpResponse } from 'msw'
 import data from '../api/data.json';

export const handlers = [
  http.get('https://example.com/data', () => {
    return HttpResponse.json(data)
  }),
]