package com.sistema.veterinaria.util;

import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ResponseEntityCustomized<T> extends ResponseEntity<T> {

	
	@SuppressWarnings("unchecked")
	public ResponseEntityCustomized(String body, HttpStatus status) {
		super((T) convertidor(body), status);
	}
	
	private static String convertidor(String s) {
		return JSONObject.quote(s);
	}

}
