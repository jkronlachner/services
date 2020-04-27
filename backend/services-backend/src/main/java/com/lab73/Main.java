package com.lab73;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// scan base packages allows us to have the controller in another package.
@SpringBootApplication(scanBasePackages = {"com.lab73"})
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}
