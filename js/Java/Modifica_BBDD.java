package js.Java;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class Modifica_BBDD {
    
    public static void main(String[] args) {
        
        try{
             //1. CREAR CONEXION
            
            Connection miConexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/geopet","root","virginia1");
            
            System.out.println("CONEXION EXITOSA!! \n");
            
            // 2. CREAR OBJETO STATEMENT
            
            Statement miStatement = miConexion.createStatement();
            
            // 3. EJECUTAR INSTRUCCION DML EN LA BASE DE DATOS
            
            String instruccionSQL = "INSERT INTO Cliente (idClientes,Nombre,Apellido,correoElectronico,contrasena,telefono) VALUES ('5','Rodrigo','Alegrete','rodrigoalegrete@gmail.com','perro1', '351636363')";
            
            miStatement.executeUpdate(instruccionSQL);
            
            System.out.println("Los datos han sido insertados correctamente");
            
        }catch (Exception e){
            
            System.out.println("No conecta!!");
            
            e.printStackTrace();
                
        }    
        
    }
}
