package com.lab73.Data;

import lombok.Data;

import java.util.*;

@Data
public class Service {
    private int id;
    private String name;
    private Date date;
    private String lat;
    private String lon;
    private int employeeId;
    private double hourRate;
    private String emoji;
}
