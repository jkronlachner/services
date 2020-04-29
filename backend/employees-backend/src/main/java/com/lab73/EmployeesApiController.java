package com.lab73;

import com.lab73.Data.Employee;
import com.lab73.Data.EmployeeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/employees")
public class EmployeesApiController {
    @Autowired
    private EmployeeService employeeService;

    @RequestMapping(method = RequestMethod.POST)
    public Employee addEmployee(@RequestBody EmployeeDto employeeDto) {
        return employeeService.addEmployee(employeeDto);
    }

    @RequestMapping(path = "{id}", method = RequestMethod.GET)
    public Employee getEmployee(@PathVariable int id) {
        return employeeService.getEmployee(id);
    }

    @RequestMapping(method = RequestMethod.GET)
    public HttpEntity<List<Employee>> getAllEmployees() {
        return new HttpEntity<>(employeeService.getAllEmployees());
    }

    @RequestMapping(path = "{id}", method = RequestMethod.PUT)
    public Employee editEmployee(@PathVariable int id, @RequestBody EmployeeDto employeeDto) {
        return employeeService.editEmployee(employeeDto, id);
    }

    @RequestMapping(path = "{id}", method = RequestMethod.DELETE)
    public Employee deleteEmployee(@PathVariable int id) {
        return employeeService.deleteEmployee(id);
    }
}
