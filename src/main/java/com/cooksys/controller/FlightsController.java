package com.cooksys.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.entity.Booking;
import com.cooksys.exceptions.CredentialsDoNotMatchException;
import com.cooksys.exceptions.PassengerDoesNotExistException;
import com.cooksys.exceptions.SomethingIsNullAndShouldNotBeException;
import com.cooksys.pojo.Flight;
import com.cooksys.service.FlightService;
import com.cooksys.service.LocationService;

@CrossOrigin
@RestController
@RequestMapping("flights")
public class FlightsController {
	
	@Autowired
	LocationService locationService;
	
	@Autowired
	FlightService flightService;
	
	@GetMapping
	public ArrayList<Flight> getFlightList()
	{
		return flightService.getDailyFlightList();
	}
	
	@GetMapping("/booking/get/{id}")
	public Booking getBookingById(@PathVariable Long id) {
		return flightService.getBookingById(id);
	}
	
	@GetMapping("/booking/passenger/{username}")
	public List<Booking> getBookingsByUsername(@PathVariable String username){
		return flightService.getBookingsByUsername(username);
	}
	
	@GetMapping("/booking/{origin}/{destination}")
	public ArrayList<ArrayList<Flight>> getPathsFromTo(@PathVariable String origin, @PathVariable String destination){
		return flightService.getPathsFromTo(origin, destination);
	}
	
	@GetMapping("/booking/{origin}")
	public List<Flight> getFlightsFrom(@PathVariable String origin){
		return flightService.getFlightsFrom(origin);
	}
	
	@GetMapping("/booking/any/{destination}")
	public List<Flight> getFlightsTo(@PathVariable String destination){
		return flightService.getFlightsTo(destination);
	}
	
	@PostMapping("/booking")
	public Booking postBooking(@RequestBody Booking booking, HttpServletResponse response) throws IOException {
		try {
			return flightService.saveBooking(booking);
		} catch (SomethingIsNullAndShouldNotBeException e) {
			e.printStackTrace();
			response.sendError(HttpServletResponse.SC_BAD_REQUEST);
			return null;
		} catch (PassengerDoesNotExistException e) {
			e.printStackTrace();
			response.sendError(HttpServletResponse.SC_NOT_FOUND);
			return null;
		} catch (CredentialsDoNotMatchException e) {
			e.printStackTrace();
			response.sendError(HttpServletResponse.SC_FORBIDDEN);
			return null;
		}
	}
	
}
