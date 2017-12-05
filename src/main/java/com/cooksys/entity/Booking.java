package com.cooksys.entity;

import java.util.List;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.cooksys.pojo.Flight;

@Entity
public class Booking {
	
	    @Id
	    @GeneratedValue
	    private Long id;
	    
	    @Embedded
	    private Login login;
	    
	    @OneToMany
	    private List<Flight> flights;
		
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public Login getLogin() {
			return login;
		}
		public void setLogin(Login login) {
			this.login = login;
		}
		
		public List<Flight> getFlights() {
			return flights;
		}
		public void setFlights(List<Flight> flights) {
			this.flights = flights;
		}
		public Booking() {
			
		}
}
