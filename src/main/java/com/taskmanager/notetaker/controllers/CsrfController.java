package com.taskmanager.notetaker.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.web.csrf.CsrfToken;
import jakarta.servlet.http.HttpServletRequest;


@RestController
public class CsrfController {
    
    @GetMapping("api/csrf")
    public String getCsrfToken(HttpServletRequest request) {
        CsrfToken csrfToken =
            (CsrfToken) request.getAttribute("_csrf");

        if (csrfToken != null) {
            logCsrfToken(csrfToken);
            return "CSRF Token: " + csrfToken.getToken();
        } else {
            return "CRSF Token Not Found.";
        }

    }

    private void logCsrfToken(CsrfToken csrfToken) {

        System.out.println("CSRF Token Name: " + csrfToken.getParameterName());
        System.out.println("CSRF Token Header Name: " + csrfToken.getHeaderName());
        System.out.println("CSRF Token Value: " + csrfToken.getToken());
    
    }

}
