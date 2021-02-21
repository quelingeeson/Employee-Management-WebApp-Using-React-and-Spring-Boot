package com.employee.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.app.model.Users;

public interface UsersRepository extends JpaRepository<Users, Integer>{

	Optional<Users> findByUsernameAndPassword(String username,String Password);
}
