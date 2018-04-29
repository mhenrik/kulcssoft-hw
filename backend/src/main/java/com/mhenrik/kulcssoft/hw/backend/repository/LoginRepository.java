package com.mhenrik.kulcssoft.hw.backend.repository;

import com.mhenrik.kulcssoft.hw.backend.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<Admin, Long> {

    Admin findAdminByUsername(String username);
}
