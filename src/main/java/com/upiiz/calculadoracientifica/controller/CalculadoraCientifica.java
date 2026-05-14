package com.upiiz.calculadoracientifica.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CalculadoraCientifica {

    @GetMapping("/")
    public String cientifica(){
        return "cientifica";
    }
}
