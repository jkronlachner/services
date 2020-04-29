package com.lab73;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfiguration {
    @Bean
    public EmployeeService createDataService() {
        EmployeeService employeeService = new EmployeeService();
        employeeService.populateData();
        return employeeService;
    }
}
