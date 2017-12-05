package com.cooksys.mappers;

import org.mapstruct.Mapper;

import com.cooksys.entity.Booking;
import com.cooksys.pojo.Flight;

@Mapper(componentModel = "spring")
public interface FlightMapper {
	
	Flight bookingToFlight(Booking booking);
	Booking flightToBooking(Flight flight);

}
