/* eslint-disable max-len */
import nock from 'nock';

import { searchMovie } from '../../src/index';
import mockData from  '../mock-answers/searchMovie.json';
const scope = nock('https://itunes.apple.com');

describe('Search Movie', () => {
  beforeAll(() => {
    nock.disableNetConnect();
  });

  afterAll(() => {
    nock.enableNetConnect();
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it("should return results for an movie called 'Deadpool'", async () => {
    scope.get('/search?term=Deadpool&limit=1&country=US&language=en&entity=movie')
      .reply(200, mockData);
    const result = await searchMovie('Deadpool', {
      limit: 1,
      timeout: 2000,
    });
    expect(result.resultCount).toBe(1);
    expect(result.results).toHaveLength(1);
  });
  it("should not return results for an movie called 'EXPERIMENTAL_TERM_OF_SEARCH'", async () => {
    scope.get('/search?term=EXPERIMENTAL_TERM_OF_SEARCH&limit=1&country=US&language=en&entity=movie')
      .reply(200, {
        "resultCount": 0,
        "results": []
      });
    const result = await searchMovie('EXPERIMENTAL_TERM_OF_SEARCH');
    expect(result.resultCount).toBe(0);
    expect(result.results).toHaveLength(0);
  });

  describe("it validates if you're passing valid optional parameters", () => {
    it("should throw exception when term is not a string, or empty string", async () => {
      const exceptionMessage = 'A "term" is a string required on any search. "term" cannot have empty spaces as well.';
      await expect(searchMovie('', {
        limit: 3,
        timeout: 2000,
      }))
        .rejects
        .toHaveProperty(
          'message', exceptionMessage
        );
    });
    it('should throw exception when limit is not a number', async () => {
      const exceptionMessage = 'Optional argument "limit" must be a number. Passed string(test)';
      await expect(searchMovie('Deadpool', { limit: "test" }))
        .rejects
        .toHaveProperty(
          'message', exceptionMessage
        );
    });
    it('should throw exception when language code is invalid', async () => {
      const exceptionMessage = 'Optional argument "language" must be a string and should be a valid ISO 639-1 language code '
        + '(https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Passed string( "INVALID" )';
      await expect(searchMovie('Deadpool', { language:'INVALID' }))
        .rejects
        .toHaveProperty(
          'message', exceptionMessage
        );
    });

    it('should throw exception when country code is invalid', async () => {
      const exceptionMessage = 'Optional argument "country" must be a string and should be a valid ISO 3166-1 Alpha 2 country code '
        + '(https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Passed string( "INVALID" )';
      await expect(searchMovie('Deadpool', { country:'INVALID' }))
        .rejects
        .toHaveProperty(
          'message', exceptionMessage
        );
    });
  });
});

