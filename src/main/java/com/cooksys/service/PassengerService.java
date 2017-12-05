package com.cooksys.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cooksys.entity.Login;
import com.cooksys.entity.Passenger;
import com.cooksys.exceptions.CredentialsDoNotMatchException;
import com.cooksys.exceptions.PassengerDoesExistException;
import com.cooksys.exceptions.PassengerDoesNotExistException;
import com.cooksys.exceptions.SomethingIsNullAndShouldNotBeException;
import com.cooksys.mappers.UserMapper;
import com.cooksys.repository.PassengerRepository;

@Service
public class PassengerService {
	
	@Autowired
	PassengerRepository passengerRepo;
	
	@Autowired
	UserMapper userMapper;
	
	private void errorCheckLogin(Login login) throws SomethingIsNullAndShouldNotBeException, PassengerDoesNotExistException {
		if(login == null) {
			throw new SomethingIsNullAndShouldNotBeException();
			
		}
		if(login.getUsername() == null || login.getPassword() == null) {
			throw new SomethingIsNullAndShouldNotBeException();
		}
		if(!passengerRepo.existsByUsername(login.getUsername())) {
			throw new PassengerDoesNotExistException();
		}
	}
	
	private void errorCheckNewUser(Login login) throws SomethingIsNullAndShouldNotBeException, PassengerDoesExistException {
		if(login == null) {
			throw new SomethingIsNullAndShouldNotBeException();
			
		}
		if(login.getUsername() == null || login.getPassword() == null) {
			throw new SomethingIsNullAndShouldNotBeException();
		}
		if(passengerRepo.existsByUsername(login.getUsername())) {
			throw new PassengerDoesExistException();
		}
	}
	
	public void internalLoginValidation(Login login) throws SomethingIsNullAndShouldNotBeException, PassengerDoesNotExistException, CredentialsDoNotMatchException {
		errorCheckLogin(login);	
		Passenger passenger = passengerRepo.getPassengerByUsername(login.getUsername());
		if(!passenger.getPassword().equals(login.getPassword())) {
			throw new CredentialsDoNotMatchException();
		}
	}

	public Boolean getLoginValidation(Login login) throws SomethingIsNullAndShouldNotBeException, PassengerDoesNotExistException {
		errorCheckLogin(login);	
		Passenger passenger = passengerRepo.getPassengerByUsername(login.getUsername());
		if(passenger.getPassword().equals(login.getPassword())) {
			return true;
		}else {
			return false;
		}
	}

	public void createPassenger(Login login) throws SomethingIsNullAndShouldNotBeException, PassengerDoesExistException{
		errorCheckNewUser(login);
		passengerRepo.save(userMapper.loginToPassenger(login));
	}

}
