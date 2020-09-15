import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWeather3HoursFixture from '@test/fixtures/stormGlassWeather3HoursFixture.json';
import stormGlassNormalized3HoursFixture from '@test/fixtures/stormGlassNormalized3HoursFixture.json';
jest.mock('axios');

describe('StormGlass cliente', () => {
  it('should return the normalized forecast from the StormGlass service', async () => {
    const lat = -33.792726;
    const lng = 151.289824;

    axios.get = jest.fn().mockResolvedValue(stormGlassWeather3HoursFixture);

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual(stormGlassNormalized3HoursFixture);
  });
});
