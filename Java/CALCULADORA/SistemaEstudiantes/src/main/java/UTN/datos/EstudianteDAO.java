package UTN.datos;

import UTN.conexion.Conexion;
import UTN.dominio.Estudiante;

import static UTN.conexion.Conexion.getConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class EstudianteDAO {
    //Método listar
    public List<Estudiante> listarEstudiantes(){
        List<Estudiante> estudiantes = new ArrayList<>();
        //Creamos algunos objetos que son necesarios para comunicarnos con la base de datos
        PreparedStatement ps; //objeto para preparar la setencia de sql
        ResultSet rs; // objeto que permite almacenar el resultado obtenido desde la base de datos
        //Creamos un objeto de tipo conecxion
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2023 ORDER BY idestudiantes2023";
        try{
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while(rs.next()){
                var estudiante = new Estudiante();
                estudiante.setIdEstudiante(rs.getInt("idestudiantes2023"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("Apellido"));
                estudiante.setTelefono(rs.getString("Telefono"));
                estudiante.setEmail(rs.getString("email"));

                //Falta agregarlo a la lista
                estudiantes.add(estudiante);
            }
        } catch(Exception e){
            System.out.println("Ocurrió un error al selecionar datos: " +e.getMessage());
        }
        finally {
            try {
                con.close();
            }catch (Exception e){
                System.out.println("Ocurrió un error al cerrar la conexión: "+e.getMessage());
            }
        }// fin finally
        return estudiantes;


    } // Fin método Listar

    //Método por id --> fin by id
    public boolean buscarEstudiantePorId(Estudiante estudiante){
        PreparedStatement ps;
        ResultSet rs;
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2023 WHERE idestudiantes2023=?";
        try {
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            rs = ps.executeQuery();
            if(rs.next()){
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true; // Se encontro un registro
            }// Fin if
        } catch (Exception e){
            System.out.println("Ocurrió un error al buscar estudiante: "+e.getMessage());
        }
        finally {
            try{
                con.close();
            } catch (Exception e){
                System.out.println("Ocurrio un error al cerrar la conexion: "+e.getMessage());

            } // fin catch

        } // Fin finally
        return false;
    }

    //Método agregar un nuevo estudiante
    public boolean agregarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "INSERT INTO estudiantes2023 (nombre, apellido, telefono, email) VALUES (?,?,?,?)";
        try{
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.execute();
            return true;

        } catch (Exception e){
            System.out.println("Ocurrió un error al agregar el estudiante: "+e.getMessage());
        } // fin del cantch

        finally {
            {
                try {
                    con.close();
                }catch (Exception e){
                    System.out.println("Error al cerrar la conexión: "+e.getMessage());
                }// fin del catch
            }
        }// fin finally
        return false;

    } // fin del metodo agregar estudiante

    // Método para modificar estudiante
    public boolean modificarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "UPDATE estudiantes2023 SET nombre=?, apellido=?, telefono=?, email=? WHERE idestudiantes2023=?";
        try{
            ps= con.prepareStatement(sql);
            ps.setString(1,estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.setInt(5, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        } catch (Exception e){
            System.out.println("Ocurrio un error al modificar el estudiante: "+e.getMessage());
        }// Fin catch
        finally {
            try {
                con.close();
            } catch (Exception e){
                System.out.println("Error al cerrar la conexión: "+e.getMessage());
            }// fin catch
        }// fin finally
        return false;
    } // fin método modificarEstudiante

    public boolean eliminarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "DELETE FROM estudiantes2023 WHERE idestudiantes2023=?";
        try{
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        } catch (Exception e){
            System.out.println("Ocurrió un error al eliminar el estudiante: "+e.getMessage());
        } // fin del catch
        finally {
            try{
                con.close();

            } catch (Exception e){
                System.out.println("Error al cerrar la conexión: "+e.getMessage());
            }// fin del catch
        }
        return false;
    }

    public static void main(String[] args) {

        var estudianteDao = new EstudianteDAO();
        //Modificar estudiante
        var estudianteModificado = new Estudiante(2, "Juan Carlos", "Juarez", "6589328", "juan@gmail.com");
        var modificado = estudianteDao.modificarEstudiante(estudianteModificado);
        if (modificado)
            System.out.println("Estudiante modificado: "+estudianteModificado);
        else
            System.out.println("No se modifico el estudiante: "+estudianteModificado);

        //Elimar estudiante con id 3
        var estudianteEliminar = new Estudiante(3);
        var eliminado = estudianteDao.eliminarEstudiante(estudianteEliminar);
        if(eliminado)
            System.out.println("Estudiante eliminado: "+estudianteEliminar);
        else
            System.out.println("No se elimino el estudiante: "+estudianteEliminar);


        //Listar los estudiantes
        System.out.println("Listado de estudiantes: ");
        List<Estudiante> estudiantes = estudianteDao.listarEstudiantes();
        estudiantes.forEach(System.out::println); //Funcion lamda para imprimir

        //Agregar estudiante
        var nuevoEstudiante = new Estudiante("Camilas","Pereyra","45581", "camila@gmail.com");
        var agregado = estudianteDao.agregarEstudiante(nuevoEstudiante);
        if(agregado){
            System.out.println("Estudiamte agregado: "+nuevoEstudiante);
        }
        else
            System.out.println("No se ha agregado estudiante: "+nuevoEstudiante);


        //Buscar por id
        //var estudiante1 = new Estudiante(2);
        //System.out.println("Estudiantes antes de la busqueda: "+estudiante1);
       // var encontrado = estudianteDao.buscarEstudiantePorId(estudiante1);
        //if(encontrado){
       //     System.out.println("Estudiante encontrado: "+estudiante1);
       // }
       // else
        //    System.out.println("No se ecnontro el estudiante: "+estudiante1.getIdEstudiante());
    }
}
