import { renderHook } from '@testing-library/react';
import useFetch from './useFetch';

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve({ msg: 'ok' }) })
);

test('fetches and returns data', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetch('/api/test'));
  await waitForNextUpdate();
  expect(result.current).toEqual({ msg: 'ok' });
});
