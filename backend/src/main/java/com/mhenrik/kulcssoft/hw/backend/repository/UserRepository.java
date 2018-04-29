package com.mhenrik.kulcssoft.hw.backend.repository;

import com.mhenrik.kulcssoft.hw.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
