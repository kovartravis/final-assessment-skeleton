package com.cooksys.mappers;

import org.mapstruct.Mapper;

import com.cooksys.entity.Booking;
import com.cooksys.pojo.BookingDTO;

@Mapper(componentModel = "spring")
public interface FlightMapper {
	
    BookingDTO bookingToDto(Booking booking);
    
}
