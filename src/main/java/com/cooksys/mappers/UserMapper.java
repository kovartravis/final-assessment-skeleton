package com.cooksys.mappers;

import org.mapstruct.Mapper;

import com.cooksys.entity.Login;
import com.cooksys.entity.Passenger;

@Mapper(componentModel = "spring")
public interface UserMapper {

	Passenger loginToPassenger(Login login);
}
