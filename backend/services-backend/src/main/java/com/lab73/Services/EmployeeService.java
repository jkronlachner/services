package com.lab73.Services;

import com.lab73.Data.Employee;
import com.lab73.Data.EmployeeDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Component
public class EmployeeService {

    private HashMap<Integer, Employee> memory = new HashMap();

    public EmployeeService() {
        populateData();
    }

    private void populateData() {
        EmployeeDto employeeDto1 = new EmployeeDto();
        employeeDto1.setFirstname("Hubert");
        employeeDto1.setLastname("Sauerampfer");
        addEmployee(employeeDto1);

        EmployeeDto employeeDto2 = new EmployeeDto();
        employeeDto2.setFirstname("Franz");
        employeeDto2.setLastname("Mayer");
        addEmployee(employeeDto2);

        EmployeeDto employeeDto3 = new EmployeeDto();
        employeeDto3.setFirstname("Max");
        employeeDto3.setLastname("Mustermann");
        addEmployee(employeeDto3);
    }

    public Employee addEmployee(EmployeeDto employeeDto) {
        int id = memory.size();
        Employee employee = convertDtoToEmployee(employeeDto);
        memory.put(id, employee);
        employee.setId(id);
        return employee;
    }

    public Employee editEmployee(EmployeeDto employeeDto, int id) {
        Employee employee = convertDtoToEmployee(employeeDto);
        memory.put(id, employee);
        return employee;
    }

    public Employee deleteEmployee(int id) {
        return memory.remove(id);
    }

    public Employee getEmployee(int id) {
        return memory.get(id);
    }

    public List<Employee> getAllEmployees() {
        return new ArrayList(memory.values());
    }

    private Employee convertDtoToEmployee(EmployeeDto employeeDto) {
        Employee employee = new Employee();
        employee.setFirstname(employeeDto.getFirstname());
        employee.setLastname(employeeDto.getLastname());
        return employee;
    }
}
