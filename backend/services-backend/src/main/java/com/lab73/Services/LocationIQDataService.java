package com.lab73.Services;

import com.lab73.Data.LocationResource;
import com.lab73.Data.LongitudeLatitude;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClientResponseException;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Component
public class LocationIQDataService {
    private static final String LOCATION_IQ_URL = "https://us1.locationiq.com/v1/search.php?key={apiKey}&q={searchString}&format=json";

    private static final String API_KEY = "855c2d6c616c4a";

    public LongitudeLatitude getLongitudeLatitudeByAddress(String address) {
        RestTemplate restTemplate = new RestTemplate();

        Map<String, String> vars = new HashMap<>();
        vars.put("apiKey", API_KEY);
        vars.put("searchString", address);

        try {
            ResponseEntity<LocationResource[]> response = restTemplate.getForEntity(LOCATION_IQ_URL, LocationResource[].class, vars);
            LongitudeLatitude result = new LongitudeLatitude();
            LocationResource[] locations = response.getBody();

            result.setLongitude(locations[0].getLon());
            result.setLatitude(locations[0].getLat());

            return result;
        } catch (RestClientResponseException e) {
            if (e.getRawStatusCode() == 400) {
                // throw new Location not found
            } else {
                // throw new location exception
            }
        }

        return null;
    }
}
