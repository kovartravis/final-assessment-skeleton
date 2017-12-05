package com.cooksys.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cooksys.entity.Passenger;

@Repository
public interface PassengerRepository extends JpaRepository<Passenger, Long> {
	
	Passenger getPassengerByUsername(String username);
    Boolean existsByUsername(String username);
}
