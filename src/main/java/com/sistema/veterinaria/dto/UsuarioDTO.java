package com.sistema.veterinaria.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class UsuarioDTO implements Serializable {

    private static final long serialVersionUID = -8855467665364879796L;

    private String aliasUsuario;

    private String nombreUsuario;

    private String paternoUsuario;

    private String maternoUsuario;

    private String passwordUsuario;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private Date fechaAltaUsuario;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private Date fechaBajaUsuario;

    private String tipoUsuario;
}
