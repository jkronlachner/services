package com.lab73.Services;

import com.lab73.Data.LongitudeLatitude;
import com.lab73.Data.Service;
import com.lab73.Data.ServiceDto;
import com.lab73.Exceptions.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ServiceDataService {

    private HashMap<Integer, Service> memory = new HashMap<>();

    private LocationIQDataService locationService = new LocationIQDataService();

    public void populateData() {
        ServiceDto serviceDto = new ServiceDto();
        serviceDto.setAddress("Hatscheksiedlung 7 4680 Haag am Hausruck");
        serviceDto.setDate("09.03.2019 12:33");
        serviceDto.setEmployeeId(1);
        serviceDto.setName("Putzen");
        addService(serviceDto);

        ServiceDto serviceDto1 = new ServiceDto();
        serviceDto1.setAddress("Parzer Schulstraße 1 4710 Grieskirchen");
        serviceDto1.setDate("12.03.2019 15:33");
        serviceDto1.setEmployeeId(0);
        serviceDto1.setName("Rasenmähen");
        addService(serviceDto1);

        ServiceDto serviceDto2 = new ServiceDto();
        serviceDto2.setAddress("Marktplatz 1 4680 Haag am Hausruck");
        serviceDto2.setName("Kochen");
        serviceDto2.setEmployeeId(0);
        serviceDto2.setDate("10.03.2019 09:50");
        addService(serviceDto2);
    }


    public Service addService(ServiceDto serviceDto) {
        int newId = memory.size();
        Service service = convertServiceDto(serviceDto);
        service.setId(newId);
        memory.put(newId, service);
        return service;
    }

    public Service getService(int id) {
        return memory.get(id);
    }

    public Service deleteService(int id) {
        return memory.remove(id);
    }

    public Service editService(int id, ServiceDto serviceDto) {
        Service service = convertServiceDto(serviceDto);
        service.setId(id);
        memory.put(id, service);
        return service;
    }

    public List<Service> getAllServices() {
        return new ArrayList<>(memory.values());
    }

    private Service convertServiceDto(ServiceDto serviceDto) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd.MM.yyyy hh:mm");

        Service service = new Service();
        service.setName(serviceDto.getName());
        service.setEmoji(serviceDto.getEmoji());
        service.setHourRate(serviceDto.getHourRate());

        try {
            service.setDate(simpleDateFormat.parse(serviceDto.getDate()));
        } catch (ParseException e) {
            throw new BadRequestException("Das Datumsformat war nicht richtig (dd.MM.yyyy hh:mm)");
        }

        try {
            LongitudeLatitude longitudeLatitudeByAddress = locationService.getLongitudeLatitudeByAddress(serviceDto.getAddress());
            service.setLon(longitudeLatitudeByAddress.getLongitude());
            service.setLat(longitudeLatitudeByAddress.getLatitude());
        } catch (Exception exception){
            throw new BadRequestException("Es gab ein Problem mit der Adresse!");
        }
        service.setEmployeeId(serviceDto.getEmployeeId());

        return service;
    }
}
