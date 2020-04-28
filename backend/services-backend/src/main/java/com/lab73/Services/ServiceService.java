package com.lab73.Services;

import com.lab73.Data.Service;
import org.springframework.stereotype.Component;

import java.util.HashMap;

@Component
public class ServiceService {

    private HashMap<Integer, Service> memory = new HashMap<>();

    public void populateData() {

    }
}
