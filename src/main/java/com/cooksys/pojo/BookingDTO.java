package com.cooksys.pojo;

import java.util.List;

public class BookingDTO {
	
	private Long id;
	private List<Flight> flights;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public List<Flight> getFlights() {
		return flights;
	}
	public void setFlights(List<Flight> flights) {
		this.flights = flights;
	}
	
	

}
