package com.cooksys.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cooksys.entity.Booking;
import com.cooksys.pojo.Flight;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
	
	@SuppressWarnings("unchecked")
	Booking save(Booking booking);
	Booking findById(Long id);
	List<Flight> findBookingsByLoginUsername(String username);

}
