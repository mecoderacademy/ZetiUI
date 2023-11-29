// ApiService.test.ts
import ApiService from './HttpService';

describe('ApiService', () => {
  const baseUrl = 'https://your-custom-base-url';
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService(baseUrl);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('fetchData should return data array', async () => {
    // Mocking fetch
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(['item1', 'item2']),
    } as Response);

    const result = await apiService.fetchData<string>('mockEndpoint');
    expect(result).toEqual(['item1', 'item2']);
  });

  it('postData should return ApiResponse', async () => {
    // Mocking fetch
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(['item1', 'item2']),
    } as Response);

    const result = await apiService.postData<string>('mockEndpoint', { data: 'mockData' });
    expect(result).toEqual({ data: ['item1', 'item2'] });
  });
});
