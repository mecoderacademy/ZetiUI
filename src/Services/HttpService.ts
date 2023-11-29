// ApiService.ts
export interface ApiResponse<T> {
    data: T[];
  }
  
  class HttpService {
    private readonly baseUrl: string;
    private readonly corsAnywhereUrl: string;
    constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
      this.corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
    }
  
    fetchData = async <T>(url: string): Promise<T[]> => {
      try {
        const response = await fetch(`${this.baseUrl}${url}`);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data: T[] = await response.json();
        return data;
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        throw error;
      }
    };
  
    postData = async <T>(url: string, body: any): Promise<T[]> => {
      try {
        const response = await fetch(`${this.baseUrl}${url}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data: T[] = await response.json();
        return data;
      } catch (error) {
        console.error(`Error posting data to ${url}:`, error);
        throw error;
      }
    };
  }
  
  export default HttpService;
  