package utn.estudiantes.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
@Entity
//boilerplate - Repetitivo
@Data // metodos get y set
@NoArgsConstructor //agrega constructor vacio
@AllArgsConstructor //Costructos con todos los argumentos
@ToString
public class Estudiante {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer idEstudiante;
        private String nombre;
        private String apellido;
        private String telefono;
        private String email;
    }


