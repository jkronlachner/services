package com.lab73;

import com.lab73.Services.ServiceDataService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfiguration {
    @Bean
    public ServiceDataService createDataService() {
        ServiceDataService serviceDataService = new ServiceDataService();
        serviceDataService.populateData();
        return serviceDataService;
    }
}
