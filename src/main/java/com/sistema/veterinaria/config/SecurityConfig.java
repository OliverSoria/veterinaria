package com.sistema.veterinaria.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableGlobalMethodSecurity(securedEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.authorizeRequests()
				.antMatchers("/vendedor/**").hasAnyRole("VENDEDOR","SUPERVISOR","ADMINISTRADOR")
				.antMatchers("/supervisor/**").hasAnyRole("SUPERVISOR","ADMINISTRADOR")
				.antMatchers("/administrador/**").hasRole("ADMINISTRADOR")
				.anyRequest().authenticated()
				.and()
			.formLogin()
				.and()
			.logout();
	}
	
}