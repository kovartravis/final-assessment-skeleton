package com.cooksys.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.entity.Login;
import com.cooksys.exceptions.PassengerDoesExistException;
import com.cooksys.exceptions.PassengerDoesNotExistException;
import com.cooksys.exceptions.SomethingIsNullAndShouldNotBeException;
import com.cooksys.service.PassengerService;

@CrossOrigin
@RestController
@RequestMapping("passengers")
public class PassengerController {

	@Autowired
	PassengerService passengerService;
	
	@PostMapping("/validate")
	Boolean validateLogin(@RequestBody Login login, HttpServletResponse response) throws IOException {
		try {
			return passengerService.getLoginValidation(login);
		} catch (SomethingIsNullAndShouldNotBeException e) {
			e.printStackTrace();
			response.sendError(HttpServletResponse.SC_BAD_REQUEST);
			return false;
		} catch (PassengerDoesNotExistException e) {
			e.printStackTrace();
			response.sendError(HttpServletResponse.SC_NOT_FOUND);
			return false;
		}
	}
	
	@PostMapping("/new")
	void createPassenger(@RequestBody Login login, HttpServletResponse response) throws IOException {
		try {
			passengerService.createPassenger(login);
		} catch (SomethingIsNullAndShouldNotBeException e) {
			e.printStackTrace();
			response.sendError(HttpServletResponse.SC_BAD_REQUEST);
		} catch (PassengerDoesExistException e) {
			e.printStackTrace();
			response.sendError(HttpServletResponse.SC_CONFLICT);
		}		
	}
}
