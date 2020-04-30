package com.lab73;

import com.lab73.Data.Service;
import com.lab73.Data.ServiceDto;
import com.lab73.Services.ServiceDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/services")
public class ServicesApiController {

    @Autowired
    private ServiceDataService serviceDataService;

    @RequestMapping(path = "{id}", method = RequestMethod.GET)
    public Service getService(@PathVariable int id) {
        return serviceDataService.getService(id);
    }

    @RequestMapping(method = RequestMethod.GET)
    public HttpEntity<List<Service>> getAllServices() {
        return new HttpEntity<>(serviceDataService.getAllServices());
    }

    @RequestMapping(path = "{id}", method = RequestMethod.PUT)
    public Service editService(@PathVariable int id, @RequestBody Service service) {
        return serviceDataService.editService(id, service);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Service addService(@RequestBody ServiceDto serviceDto) {
        return serviceDataService.addService(serviceDto);
    }

    @RequestMapping(path = "{id}", method = RequestMethod.DELETE)
    public Service deleteService(@PathVariable int id) {
        return serviceDataService.deleteService(id);
    }
}
