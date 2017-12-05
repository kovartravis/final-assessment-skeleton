package com.cooksys.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.cooksys.component.FlightGenerator;
import com.cooksys.entity.Booking;
import com.cooksys.exceptions.CredentialsDoNotMatchException;
import com.cooksys.exceptions.PassengerDoesNotExistException;
import com.cooksys.exceptions.SomethingIsNullAndShouldNotBeException;
import com.cooksys.pojo.Flight;
import com.cooksys.repository.BookingRepository;
import com.cooksys.repository.FlightRepository;

@Service
public class FlightService {

	@Autowired
	FlightGenerator generator;

	@Autowired
	BookingRepository bookingRepo;

	@Autowired
	PassengerService passengerService;

	@Autowired
	FlightRepository flightRepo;

	private ArrayList<Flight> flightList = new ArrayList<>();

	public ArrayList<Flight> getDailyFlightList() {
		return flightList;
	}

	// The fixedDelay parameter determines how often a new day is generated as
	// expressed in milliseconds
	@Scheduled(fixedDelay = 5000)
	private void refreshFlghts() {
		flightList = generator.generateNewFlightList();
		
//		flightList.add(new Flight("MEMPHIS", "NASHVILLE"));
//		flightList.add(new Flight("MEMPHIS", "KNOXVILLE"));
//		flightList.add(new Flight("KNOXVILLE", "CHATTANOOGA"));
//		flightList.add(new Flight("KNOXVILLE", "NASHVILLE"));
//		flightList.add(new Flight("CHATTANOOGA", "NASHVILLE"));
	}

	public Booking saveBooking(Booking booking) throws SomethingIsNullAndShouldNotBeException,
			PassengerDoesNotExistException, CredentialsDoNotMatchException {
		passengerService.internalLoginValidation(booking.getLogin());
		flightRepo.save(booking.getFlights());
		return bookingRepo.save(booking);
	}

	public Booking getBookingById(Long id) {
		return bookingRepo.findById(id);
	}

	public List<Flight> getBookingsByUsername(String username) {
		return bookingRepo.findBookingsByLoginUsername(username);
	}

	public ArrayList<ArrayList<Flight>> getPathsFromTo(String origin, String destination){
		ArrayList<ArrayList<Flight>> pathSet = new ArrayList<ArrayList<Flight>>();
		for(Flight flightsToDest : flightList.stream().filter( f -> f.getDestination().equals(destination)).collect(Collectors.toList())) {
			if(flightsToDest.getOrigin().equals(origin)) {
				ArrayList<Flight> path = new ArrayList<Flight>();
                path.add(flightsToDest);
                pathSet.add(path);
			}else {
				for(Flight flightsToMid : flightList.stream().filter( f -> f.getDestination().equals(flightsToDest.getOrigin()) ).collect(Collectors.toList())) {
					if(flightsToMid.getOrigin().equals(origin)) {
						ArrayList<Flight> path = new ArrayList<Flight>();
		                path.add(flightsToMid);
		                path.add(flightsToDest);
		                pathSet.add(path);
					}else {
						for(Flight flightsToStart : flightList.stream().filter( f -> f.getDestination().equals(flightsToMid.getOrigin()) ).collect(Collectors.toList())) {
							if(flightsToStart.getOrigin().equals(origin)) {
								ArrayList<Flight> path = new ArrayList<Flight>();
								path.add(flightsToStart);
				                path.add(flightsToMid);
				                path.add(flightsToDest);
				                pathSet.add(path);
						    }
						}
					}
				}
			}
		}
		return pathSet;
	}

	public List<Flight> getFlightsFrom(String origin) {
		return flightList.stream().filter(f -> f.getOrigin().equals(origin)).collect(Collectors.toList());
	}

	public List<Flight> getFlightsTo(String destination) {
		return flightList.stream().filter(f -> f.getDestination().equals(destination)).collect(Collectors.toList());
	}

}
